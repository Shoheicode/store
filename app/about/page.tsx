import db from '@/utils/db'

async function AboutPage(){
    const profile = await db.testProfile.create({
      data:{
        name: "RANDOM NAME"
      }
    })
    return (
      <div>About Page</div>
    )
  }
  
export default AboutPage