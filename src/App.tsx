import './app.css';
import { GetStartedBtn } from './components/GetStartedBtn';

export default function App() {

    return (
        <>
            <header className='flex justify-between items-center mt-6 mx-6 md:mt-20 md:mr-20 md:ml-16'>
                <img
                    className='w-24 md:w-60'
                    src="./assets/logo.svg"
                    alt="Home Page" />
                <a
                    className='font-openSans text-xs text-pink-400 py-[5px] px-[18px] border border-pink-400 rounded-xl shadow-[0_0_5px_rgba(255,82,193,0.22)] md:text-base md:leading-[22px] md:py-2 md:px-8'
                    href="#">
                    Try It Free
                </a>
            </header>

            <main >
                <article className='flex flex-col items-center px-7 mt-28 md:mt-56'>
                    <h1 className='font-Poppins font-bold text-2xl md:text-5xl md:leading-[72px] text-center'>
                        Build The Community Your Fans Will Love
                    </h1>
                    <p className='font-openSans text-sm md:text-xl text-center mt-6 md:mt-7 md:max-w-2xl mb-12'>
                        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                    </p>

                    <GetStartedBtn className='md:mt-[74px]' />

                    <picture className='mt-28 md:mt-[120px] max-w-[296px] md:max-w-[1016px]'>
                        <source media='(min-width:768px)' srcSet='./assets/intro-desktop.png' />
                        <img
                            src="./assets/intro-mobile.png"
                            alt="" />
                    </picture>

                    <div className=' mt-[120px] md:flex md:space-x-[341px]'>
                        <section className='font-openSans'>
                            <img
                                className='w-9 md:w-14'
                                src="./assets/peoples.svg" alt="" />
                            <h2 className='font-bold text-6xl md:text-8xl md:leading-[144px]'>1.4k+</h2>
                            <p className='text-gray-500 mt-3 text-center md:text-2xl md:mt-1'>Communities Formed</p>
                        </section>

                        <section className='font-openSans mt-[88px] md:mt-0'>
                            <img
                                className='w-9 md:w-14'
                                src="./assets/peoples.svg" alt="" />
                            <h2 className='font-bold text-[53px] md:text-8xl md:leading-[144px]md:text-8xl md:leading-[144px]'>2.7m+</h2>
                            <p className='text-gray-500 mt-2 text-center text-sm md:text-2xl md:mt-1'>Messages Sent</p>
                        </section>
                    </div>
                </article>

                {/* TODO: finish article one */}
                <article className='flex flex-col md:flex-row-reverse md:justify-center items-center bg-[url("./assets/article1-bg-mobile.svg")] bg-center  md:bg-article1 md:bg-test1 bg-no-repeat md:bg-[url("./assets/article1-bg-desktop.svg")] px-7 pb-[133px] md:pb-[116px] pt-[180px] md:pt-[165px]  md:mt-[133px]'>
                    <picture className='max-w-[280px] md:max-w-[560px]'>
                        <source media='(min-width: 768px)' srcSet='./assets/article1-desktop.png' />
                        <img

                            src="./assets/article1-mobile.png"
                            alt="" />
                    </picture>
                    
                    <div className='md:mr-[100px] '>
                        <h3 className='font-Poppins font-bold text-xl md:text-[2.5rem] md:leading-[60px] mt-10 text-center'>Grow Together</h3>
                        <p className='font-openSans text-sm md:text-base mt-4 md:mt-7 text-center md:text-left md:max-w-lg'>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. </p>
                    </div>
                </article>

                <article className='flex flex-col items-center mt-28 px-7'>
                    <img
                        className='max-w-[265.5px]'
                        src="./assets/article2-mobile.png"
                        alt="" />

                    <h3 className='mt-[85px] font-Poppins font-bold text-xl'>Flowing Conversations</h3>

                    <p className='mt-4 font-openSans text-sm text-center'>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
                </article>

                <article className='mt-[120px] flex flex-col items-center bg-no-repeat bg-[left_-178px_top_0]  bg-[url("./assets/article3-bg-mobile.svg")] px-7 pt-20 pb-[273px]'>
                    <img
                        className='max-w-[280px]'
                        src="./assets/article3-mobile.png"
                        alt="" />
                    <h3 className='font-Poppins font-bold text-xl mt-10'>Your Users</h3>
                    <p className='font-openSans text-sm text-center mt-4'>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
                </article>

                <article className='flex flex-col items-center mt-2'>
                    <h4 className='font-Poppins font-bold text-2xl text-center '>
                        Ready To Build Your Community?
                    </h4>
                    <GetStartedBtn className='mt-10' />
                </article>
            </main>

            <footer className='mt-64  bg-no-repeat bg-[url("./assets/footer-bg.svg")]  bg-[length:130%] pt-[109px] px-7 pb-12'>

                <h5 className='font-openSans font-bold text-2xl text-white'>NEWSLETTER</h5>

                <p className='mt-4 font-openSans font-semibold text-white text-sm leading-6'>
                    To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address
                </p>

                <form className='mt-8 flex flex-col'>
                    <input
                        className='rounded-md p-3'
                        type="email"
                        placeholder='Something@where.com' />

                    <button className='mt-4 self-end font-openSans font-bold text-white py-3 px-10 bg-pink-400 rounded-md'>
                        Subscribe
                    </button>
                </form>

                <img
                    className='w-52 mt-28 invert brightness-0'
                    src="./assets/logo.svg"
                    alt="" />

                <p className='font-openSans font-semibold text-sm leading-6 text-white mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                </p>

                <section className='mt-10 flex'>
                    <img src="./assets/phone.svg" alt="" />
                    <p className='ml-4 font-openSans text-sm leading-6 text-white'>
                        Phone: +1-543-123-4567
                    </p>
                </section>

                <section className='mt-4 flex'>
                    <img src="./assets/email.svg" alt="" />
                    <p className='ml-4 font-openSans text-sm leading-6 text-white'>
                        example@company.com
                    </p>
                </section>

                <section className='mt-12 flex space-x-[17px]'>
                    <a href="#">
                        <img src="./assets/facebook.svg" alt="" />
                    </a>
                    <a href="#">
                        <img src="./assets/insta.svg" alt="" />
                    </a>
                    <a href="#">
                        <img src="./assets/twitter.svg" alt="" />
                    </a>
                </section>

            </footer>
        </>
    )
}