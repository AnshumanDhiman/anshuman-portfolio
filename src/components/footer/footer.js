

export default function footer() {
  return (
    <>
        <div className="text-center lg:text-left border-t-[0.01rem] border-border_black"> 
            <div className="container px-[22rem] py-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-4">    
                    <p className=" text-light_black">About</p>
                    <p className=" text-light_black">Articles</p>
                    <p className=" text-light_black">Projects</p>        
                    <p className=" text-light_black">Speaking</p>    
                </div>
            </div>
            <p className="text-center text-light_black">© 2023 Anshuman Dhiman. All rights reserved</p>
        </div>
    <br/><br/>
    </> 
  )
}
