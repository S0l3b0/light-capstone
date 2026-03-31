import LoginForm from '/src/login/loginForm.jsx';
import Profile from '/src/components/profile.jsx';
import Banner from "/src/components/banner.jsx";

function Home() {
  return (
    <div className='h-screen space-y-10 bg-indigo-900'>
      <div className="w-screen">
          <Banner
            title = "Lighting Inventory"
            subtitle = "By: Sophie Bowyer, Billie Nolfi-Makau, and Lily Alessi"
          />
        
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbucBLhpnT_kbagut7MMgipsZLx1e20egOw&s' className="mx-auto mt-10" />
      </div>
      <div className='flex space-x-50 text-center justify-center'>
        <Profile
          pic ='https://static.vecteezy.com/system/resources/previews/027/258/893/non_2x/paint-bucket-line-icon-isolated-on-white-background-vector.jpg'
          name='Lily'
          job='Webdesign'
          blurb='Lead Set Design + Construction 2025-26'>
        </Profile>

        <Profile
          pic = 'https://img.freepik.com/premium-vector/microphone-icon-vector-illustration-isolated-white-background_74669-775.jpg'
          name='Sophie'
          job='Backend'
          blurb='Sound Op 2025-26'>
        </Profile>
        <Profile
          pic ='https://static.vecteezy.com/system/resources/previews/006/757/532/non_2x/light-bulb-icon-free-vector.jpg'
          name='Billie'
          job='Backend + Styling'
          blurb='Lighting Design + Op 2025-26'>
        </Profile>
      </div>
    </div>

  )
}
export default Home;