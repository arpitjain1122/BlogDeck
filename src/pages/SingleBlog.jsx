import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaClock } from 'react-icons/fa6';
import Sidebar from '../components/Sidebar';



const SingleBlog = () => {
    const data = useLoaderData();
    console.log(data)
    const { title, author, content, image, reading_time, published_date } = data[0];
    console.log(title)
    return (
        <div>
            <div className='py-36 bg-[rgb(137,80,80)] text-white text-center px-4'>
                <h1 className='text-5xl leading-snug font-bold mb-5'>Blog Page</h1>
            </div>

            <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
                <div className='lg:w-3/4 mx-auto'>
                    <div><img src={image} alt="" className='mx-auto w-full rounded mb-5' /></div>
                    <h2 className='text-3xl font-bold mb-4 text-blue-600 cursor-pointer'>{title}</h2>
                    <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2' /> {author} | {published_date}</p>
                    <p className='mb-6 text-gray-600'><FaClock className='inline-flex items-center mr-2' /> {reading_time}</p>
                    <p className='text-sm text-gray-500 mb-6'>{content} </p>
                    <div className='text-base text-gray-500'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis sapiente necessitatibus unde ullam porro veritatis id suscipit facilis accusantium deserunt quibusdam voluptatem magni provident iste, ex quisquam dignissimos nostrum non?
                            <br /> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium totam tempora quas modi exercitationem earum aliquid cupiditate, iure corporis praesentium quis error itaque voluptatibus rem maiores! Quod, est voluptatibus.
                            <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at aliquid ea suscipit dolorum ipsum assumenda error. Magnam ratione obcaecati repellendus saepe, odit eveniet temporibus nostrum laborum, nulla aliquam officia, iusto nihil error. Reiciendis velit, tempore aliquid nobis nam sint veniam error quod ut accusantium tempora voluptate officiis neque omnis itaque, accusamus quo nisi repudiandae ab aperiam natus eligendi. Repellat optio facere atque sequi, exercitationem voluptas iusto et natus aspernatur aliquam, accusamus enim iste recusandae, molestias magnam aliquid deserunt quidem alias ullam odit! Autem, totam hic natus ab ullam aliquid quo vitae at illo cumque exercitationem saepe pariatur incidunt fugiat qui possimus cupiditate voluptatem id deserunt asperiores ad ut est! Aspernatur voluptates possimus minima in ipsa! Amet animi odit beatae velit? Recusandae velit aut impedit animi vero nostrum officiis aperiam eum reprehenderit iusto veritatis quia, sapiente nulla, consectetur distinctio voluptate quo qui aliquam deleniti voluptatibus ea laborum. Sapiente a dicta dolor magni Sed
                        <br /> <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut culpa repudiandae asperiores, placeat, alias veritatis ex minus consectetur tenetur libero fuga et eligendi! Distinctio, incidunt ipsa nisi eaque amet consequuntur neque voluptates perspiciatis. Laboriosam ducimus quia optio et. Libero possimus voluptas iusto rem nam nemo cumque consequatur nostrum ipsam? Laborum odio nostrum itaque ducimus molestias assumenda aut numquam blanditiis ratione praesentium nobis ut voluptate eaque iste provident sapiente eius excepturi at suscipit quam, quas possimus officiis quia aliquid! Recusandae.
                        </p>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                <Sidebar/>
                </div>

            </div>
        </div>
    )
}

export default SingleBlog