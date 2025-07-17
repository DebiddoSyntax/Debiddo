import crowdhelpImage from '../../assets/Crowdhelp.webp'
import mockup from '../../assets/crowdhelpMockUp.png'
import process from '../../assets/designProcess.png'

function Crowdhelp() {
  return (
    <div className="py-20 px-0 bg-white">
        <div>
          <img className='w-full' src={crowdhelpImage} alt="crowdhelp"></img>
        </div>

        <div className='mt-40 py-20'>
          <div className='grid grid-cols-2 px-20 md:px-40 lg:px-60 gap-10'>
            <div className='text-black px-14 py-10 bg-[#F1F1F1] rounded-lg'>
                <h4 className='text-xl text-[#3D83F6] font-semibold'>Business description</h4>
                <p className='mt-5 text-lg font-medium text-gray-600 leading-8'>
                  Crowdhelp is a dynamic and innovative platform that harnesses the collective intelligence of a diverse crowd to provide creative solutions and assistance. 
                  Our business revolves around collaborative problem-solving, tapping into the wisdom and skills of a global community to address challenges faced by small businesses. 
                  Crowdhelp connects individuals and businesses with a vast network of contributors, fostering collaboration and unlocking unparalleled potential.
                </p>
            </div>

            <div className='h-[400px] bg-[#F1F1F1] rounded-lg'>
              <img className='h-full m-auto' src={mockup} alt="crowdhelp mockup" />
            </div>
          </div>

          <div className='mt-10 grid grid-cols-2 px-20 md:px-40 lg:px-60 gap-10'>
            <div className='text-black px-14 py-10 bg-[#F1F1F1] rounded-lg'>
                <h4 className='text-xl text-[#3D83F6] font-semibold'>Problem statement</h4>
                <p className='mt-5 text-lg font-medium text-gray-600 leading-8'>
                  Small businesses often face the challenge of securing funding to start or expand their operations. 
                  There are several reasons for this, including the perception of risk associated with small businesses, limited collateral, and lack of financial track record.
                </p>
            </div>

            <div className='text-black px-14 py-10 bg-[#F1F1F1] rounded-lg'>
                <h4 className='text-xl text-[#3D83F6] font-semibold'>Project goal</h4>
                <p className='mt-5 text-lg font-medium text-gray-600 leading-8'>
                  The project goal was to create a mobile app that bridge the funding gap for small businesses by connecting them with angel investors who are looking to 
                  make an impact in their local communities by providing microcredit investments.
                </p>
            </div>
          </div>
        </div>

        <div className='bg-[#15171B] py-20 px-20 md:px-40 lg:px-60'>
          <h4 className='text-4xl text-white font-bold'>Key Features</h4>
          <div className='mt-10 grid grid-cols-3  gap-10'>
            <div className='bg-[#21252E] px-8 py-10 h-full rounded-md'>
                <h5 className='text-lg text-[#3D83F6] font-semibold'>Collaborative facility</h5>
                <p className='mt-3 text-base font-medium text-gray-300 leading-7'>
                  Crowdhelp facilitates collaborative problem-solving by connecting small businesses to angel investors. 
                  Features like user profile page and in-app messaging improves communication and efficient collaboration.
                </p>
            </div>
            <div className='bg-[#21252E] px-8 py-10 h-full rounded-md'>
                <h5 className='text-lg text-[#3D83F6] font-semibold'>User rating and Rewards</h5>
                <p className='mt-3 text-base font-medium text-gray-300 leading-7'>
                  The user rating feature in CrowdHelp assign ranks to users based on overall engagement, helpfulness and contributions within the community. T
                  he ranking system improves trust, recognizes and rewards users, the higher the rank the higher the reward received. 
                </p>
            </div>
            <div className='bg-[#21252E] px-8 py-10 h-full rounded-md'>
                <h5 className='text-lg text-[#3D83F6] font-semibold'>Secure data protection</h5>
                <p className='mt-3 text-base font-medium text-gray-300 leading-7'>
                  Information are safeguarded by using strong security measures. It encrypts your data during transmission and storage, and only authorized people can access it. 
                  Regular security checks make sure everything follows the rules. You can trust CrowdHelp to protect your privacy while you work together with others.
                </p>
            </div>
          </div>
        </div>

        <div className='text-black mt-28 px-20 md:px-40 lg:px-60'>
          <h4 className='text-4xl font-bold'>Design Process</h4>
          <img className='w-full mt-20' src={process} alt="" />
        </div>

        <div className='text-black mt-48 px-20 md:px-40 lg:px-60'>
          <h4 className='text-black text-4xl font-bold'>User Personas</h4>
          <div>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
            
            <div>
              <ol>
                <li>Invest in a small business</li>
                <li>Collaborate with a small business </li>
                <li>Secure transaction with a small business</li>
                <li>Rewards for investment in a small business</li>
              </ol>

              <ol className='mt-10'>
                <li>Invest in a small business</li>
                <li>Collaborate with a small business</li>
                <li>Secure transaction with a small business</li>
                <li>Rewards for investment in a small business</li>
              </ol>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Crowdhelp
