import db from '@/utils/db'

async function AboutPage(){
    const profile = await db.testProfile.create({
      data:{
        name: "RANDOM NAME"
      }
    })

    const user = await db.testProfile.findMany();
    return (
      <div>
        {user.map((user) => {
          return <h2 key={user.id} className='text-2xl font-bold'>
            {user.name}
          </h2>
        })}

      </div>
    )
  }
  
export default AboutPage