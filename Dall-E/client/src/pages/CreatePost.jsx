import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt } from "../utils"
import { FormField, Loader } from '../components'

const CreatePost = () => {

  const navigate = useNavigate();

  const[form, setForm] = useState({
    name:'',
    prompt:'',
    photo:''
  });

  const[generatingImg, setGeneratingImg] = useState(true);
  const[loading, setLoading] = useState(false);

  const generateImage = async () => {
    if(form.prompt){
      try {
        setGeneratingImg(true);
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({prompt : form.prompt})
        })

        const data = await response.json();

        setForm({...form, photo: `data : image/jpeg; base64, ${data.photo}`})
      } catch (error) {
        alert(error)
      }finally{
        setGeneratingImg(false);
      }
    }else{
      alert('Please enter a propmt');
    }
  }

  const handleSubmit = () => {

  }

  const handleChange = (event) => {
    {/* Below Statement we are Updating the Name Value in UseState Hook */}
    setForm({...form , [event.target.name] : event.target.value })
  }

  const handleSurpriseMe = () => {
    {/* Below we are writing statement to get the Randomly generated Random Prompt Constant and we are
  setting that the randomly generated index when user clicks on surprise me button */}
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({...form, prompt : randomPrompt})
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>Create imaginative and visually stunning images through DALL-E AI 
        and share them with the Community</p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
          labelName="Your name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={form.name}
          handleChange={handleChange}/>
          <FormField
          labelName="Prompt"
          type="text"
          name="prompt"
          placeholder="a pencil and watercolor drawing of a bright city in the future with flying cars"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}/>

          {/* Below Div Helps in showing the AI Generated Image if AI fails to Generate the Image then
          it will show Preview Image this has been done using Ternary Operator */}
          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm
          rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo ? (
              <img 
              src={form.photo}
              alt={form.prompt}
              className='w-full h-full object-contain'/>
            ) : (
              <img 
              src={preview}
              alt="preview"
              className='w-9/12 h-9/12 object-contain opacity-40' />
            )}
            {/* Below we are generating the Loader using Loader Component when image is Generating */}
            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'></div>
            )}
          </div>
        </div>

        {/* Below Div is used to submit the Created Image */}
        <div className='mt-5 flex gap-5'>
              <button
              type='button'
              onClick={generateImage}
              className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5
              text-center'
              >
                {generatingImg ? "Generating..." : "Generate"}
              </button>
        </div>
        {/* Below Div Represents the Text when User user Creates the Image 
        then they can share that with the Community */}
        <div className='mt-10'>
          <p className='mt-2 text-[#666e75] text-[14px]'>Once you have created the image you want, you can share
          it with others in the Community</p>
          <button 
          type='submit'
          className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5
          py-2.5 text-center'>
            {loading ? "Sharing..." : "Share with the Community"}
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost