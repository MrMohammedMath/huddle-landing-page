import './app.css';
import { GetStartedBtn } from './components/GetStartedBtn';
import { useForm } from 'react-hook-form'

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(errors);

    return (
        <div className='md:max-w-[1440px]'>
            <header className='flex justify-between items-center mt-6 mx-6 md:mt-20 md:mr-20 md:ml-16 md:max-w-[1440px]'>
                <img
                    className='w-24 md:w-60'
                    src="./assets/logo.svg"
                    alt="Home Page" />
                <a
                    className='font-openSans text-xs text-pink-500 hover:text-pink-400 py-[5px] px-[18px] border border-pink-500 hover:border-pink-400 rounded-xl shadow-[0_0_5px_rgba(255,82,193,0.22)] md:text-base md:leading-[22px] md:py-2 md:px-8'
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

                <article className='md:mt-[133px] relative overflow-hidden'>

                    <div className='flex flex-col md:flex-row-reverse md:justify-center items-center px-7 pb-[133px] md:pb-[116px] pt-[180px] md:pt-[165px]'>
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
                    </div>

                    <picture className='absolute -z-10 block top-0 bottom-0 left-1/2 -translate-x-1/2  w-[789px] h-[763px] md:w-[1558px] md:h-[841px] md:left-0 md:translate-x-0 md:right-[-118px]'>
                        <source media='(min-width: 768px)' srcSet='./assets/article1-bg-desktop.svg' />
                        <img src="./assets/article1-bg-mobile.svg" alt="" />
                    </picture>
                </article>

                <article className='flex flex-col md:flex-row md:justify-center md:space-x-32 items-center mt-28 px-7'>
                    <picture className='max-w-[265.5px] md:w-[560px] md:max-w-none'>
                        <source media='(min-width: 768px)' srcSet='./assets/article2-desktop.png' />
                        <img
                            src="./assets/article2-mobile.png"
                            alt="" />
                    </picture>

                    <div>
                        <h3 className='mt-[85px] md:mt-0 font-Poppins font-bold text-xl md:text-[2.5rem] md:leading-[3.75rem] text-center'>Flowing Conversations</h3>
                        <p className='mt-4 md:mt-7 md:max-w-lg font-openSans text-sm md:text-base  text-center md:text-left'>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
                    </div>
                </article>

                <article className='mt-[120px] relative overflow-hidden'>
                    {/* Content */}
                    <div className='flex flex-col items-center md:flex-row-reverse md:justify-center  px-7 pt-20 pb-[273px]'>
                        <picture className='max-w-[280px] md:w-[560px] md:max-w-none'>
                            <source media='' srcSet='./assets/article3-desktop.png' />
                            <img
                                src="./assets/article3-mobile.png"
                                alt="" />
                        </picture>

                        <div className='md:mr-32'>
                            <h3 className='font-Poppins font-bold text-xl md:text-[2.5rem] md:leading-[3.75rem] text-center mt-10 md:mt-0'>Your Users</h3>
                            <p className='font-openSans text-sm md:text-base text-center md:text-left mt-4 md:mt-7 md:max-w-lg'>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
                        </div>
                    </div>

                    {/* Background */}
                    <picture className='absolute -z-10  block top-0 bottom-0 -translate-x-44 md:-translate-x-24 w-[892px] h-[803px] md:w-[1643px] md:h-[802px]'>
                        <source media='(min-width: 768px)' srcSet='./assets/article3-bg-desktop.svg' />
                        <img src="./assets/article3-bg-mobile.svg" alt="" />
                    </picture>
                </article>

                <article className='flex flex-col items-center mt-2'>
                    <h4 className='font-Poppins font-bold text-2xl md:text-5xl md:leading-[60px] text-center '>
                        Ready To Build Your Community?
                    </h4>
                    <GetStartedBtn className='mt-10' />
                </article>
            </main>

            <footer className='md:flex md:flex-row-reverse md:justify-between mt-64  bg-no-repeat bg-[url("../assets/footer-bg-mobile.svg")] md:bg-[url("../assets/footer-bg-desktop.svg")] bg-[length:130%] md:bg-[length:109%] md:bg-[left_bottom] pt-[109px] md:pt-72 px-7 md:px-32 pb-12 md:pb-28'>

                <section>
                    <h5 className='font-openSans font-bold text-2xl text-white'>NEWSLETTER</h5>

                    <p className='mt-4 font-openSans font-semibold text-white text-sm leading-6 md:max-w-xs'>
                        To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address
                    </p>


                    <form
                        className='mt-8 md:mt-10 flex flex-col md:flex-row md:space-x-10'
                        onSubmit={handleSubmit((data) => {
                            console.log(data);
                        })}
                    >
                        <div>
                            <input
                                className='rounded-md p-3 md:min-w-[320px] w-full'
                                type="text"
                                placeholder='Something@where.com'
                                {...register("email", {
                                    required: 'This filed is required',
                                    validate: ((value: string) => {
                                        if (value.match(/^\S+@\S+$/i)) {
                                            return true;
                                        } else {
                                            return "Check your email please";
                                        }
                                    })

                                })}
                            />

                            <p className={`font-openSans font-semibold text-sm leading-6 text-red-500 mt-1 ${!errors.email?.type && 'hidden'}`}>Check your email please</p>
                        </div>

                        <button className='mt-4 md:mt-0 self-end font-openSans font-bold text-white py-3 px-10 bg-pink-500 hover:bg-pink-400 rounded-md md:self-start'>
                            Subscribe
                        </button>
                    </form>
                </section>

                <section className='mt-28 md:mt-0'>
                    <img
                        className='w-52 md:w-60 invert brightness-0'
                        src="./assets/logo.svg"
                        alt="" />

                    <p className='font-openSans font-semibold text-sm leading-6 text-white mt-4 md:mt-7 md:max-w-xs'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                    </p>

                    <section className='mt-10 md:mt-6 flex'>
                        <img
                            className='w-6 h-6'
                            src="./assets/phone.svg" alt="" />
                        <p className='ml-4 font-openSans text-sm md:text-base leading-6 text-white'>
                            Phone: +1-543-123-4567
                        </p>
                    </section>

                    <section className='mt-4 flex'>
                        <img
                            className='w-6 h-6'
                            src="./assets/email.svg" alt="" />
                        <p className='ml-4 font-openSans text-sm md:text-base leading-6 text-white'>
                            example@company.com
                        </p>
                    </section>

                    <section className='mt-12 md:mt-20 flex space-x-[17px] md:space-x-6'>
                        <a href="#">
                            <img
                                className='w-6 h-6 md:w-8 md:h-8'
                                src="./assets/facebook.svg" alt="Facebook" />
                        </a>
                        <a href="#">
                            <img
                                className='w-6 h-6 md:w-8 md:h-8'
                                src="./assets/insta.svg" alt="Insta" />
                        </a>
                        <a href="#">
                            <img
                                className='w-6 h-6 md:w-8 md:h-8'
                                src="./assets/twitter.svg" alt="Twitter" />
                        </a>
                    </section>
                </section>
            </footer>
        </div>
    )
}