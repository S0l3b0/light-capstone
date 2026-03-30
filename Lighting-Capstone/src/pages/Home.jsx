import LoginForm from '/src/login/loginForm.jsx';
import Profile from '/src/components/profile.jsx';
import Banner from "/src/components/banner.jsx";

function Home() {
  return (
    <div className='h-screen space-y-10'>
      <div className="w-screen">
          <Banner
            title = "Lighting Inventory"
            subtitle = "By: Sophie Bowyer, Billie Nolfi-Makau, and Lily Alessi"
          />
        
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbucBLhpnT_kbagut7MMgipsZLx1e20egOw&s' className="mx-auto mt-10" />
      </div>
      <div className='flex space-x-50 text-center justify-center'>
        <Profile
          pic ='/photos/vigo.jpeg'
          name='Lily'
          job='webdesign'
          blurb='i am lily. fear me.'>
        </Profile>

        <Profile
          pic = '/photos/hermie.JPEG'
          name='Sophie'
          job='master coder'
          blurb='i am sophie. i know all.'>
        </Profile>
        <Profile
          pic ='/photos/cosmo.JPEG'
          name='Billie'
          job='ideanator'
          blurb='i am billie. i am somewhere.'>
        </Profile>
      </div>
    </div>

  )
}
export default Home;