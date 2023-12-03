"use client"

import Hero from '@/components/Hero';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefer-color-sheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark")
    }
  }, []);

  return (
    <main className='relative'>
      <div className='w-full h-full absolute -z-[9999] overflow-hidden'>
        <div
          className='w-4 sm:w-6 h-[50rem] bg-purple-300 absolute -top-32 left-[70%] rotate-[-25deg] sm:rotate-[-40deg] lg:rotate-[-45deg] rounded-full overflow-hidden blur-[2rem]'
          style={{ overflow: 'hidden' }}
        >
        </div>
        <div
          className='w-4 sm:w-6 h-[50rem] bg-red-300 absolute -top-32 left-3/4 rotate-[-25deg] sm:rotate-[-40deg] lg:rotate-[-45deg] rounded-full overflow-hidden blur-[2rem]'
        >
        </div>
        <div
          className='w-4 sm:w-6 h-[30rem] bg-purple-300 absolute -top-32 left-[80%] rotate-[-25deg] sm:rotate-[-40deg] lg:rotate-[-45deg] rounded-full overflow-hidden blur-[2rem]'
        >
        </div>
        <div
          className='w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 absolute top-40 left-12 sm:left-16 lg:left-20 bg-purple-300 -z-20 rounded-full blur-[7rem]'
        >
        </div>
      </div>
      <Hero />
      <div className="container my-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, perferendis repellat? Iste, recusandae molestiae nemo omnis assumenda ducimus doloribus laudantium quam suscipit nesciunt hic corporis aliquam asperiores numquam neque, ab distinctio quas quod enim. Molestiae, error omnis accusamus harum similique unde mollitia perspiciatis necessitatibus voluptas asperiores dolores, voluptatum eum totam temporibus reiciendis ipsa incidunt animi sunt assumenda, ullam voluptates. Quia architecto distinctio nemo error id consequuntur praesentium autem, alias accusantium non officia enim earum esse neque illum? Ratione, error adipisci. In velit tenetur cumque obcaecati accusantium eos ipsa rerum explicabo beatae ullam voluptatum, nam at assumenda fugiat sequi molestiae ipsam et dignissimos id distinctio tempore! Perspiciatis quo sunt voluptatem voluptatibus enim beatae et corporis necessitatibus voluptas, provident, ipsum ipsa esse! Amet tempore explicabo doloremque tenetur ullam temporibus? Aperiam, cupiditate repellendus. Odio doloremque rerum quod ea aliquid totam accusantium vitae voluptatibus perspiciatis suscipit libero cum hic ipsa esse modi quidem labore repellat cumque, molestiae delectus in iure cupiditate aspernatur quas! Deserunt maiores quasi perferendis omnis tempora aperiam porro nesciunt veniam dicta corporis officia eveniet, consequatur cum minus fugiat? Accusamus deleniti veniam quae mollitia qui eveniet excepturi cum iure molestiae repudiandae magni optio totam recusandae, ipsum delectus architecto. Cumque tempora nam in, suscipit temporibus sapiente perferendis atque consequuntur iusto, molestias reprehenderit neque dicta amet adipisci quia debitis architecto repudiandae impedit optio. Fugit reiciendis voluptates quos, labore voluptatem nesciunt aspernatur quam beatae voluptatibus sed dolores autem suscipit odio, quibusdam earum officia architecto accusamus animi voluptatum dolor. Obcaecati, sunt? Qui atque ut cum, possimus deserunt earum? Dolorem quam ducimus officia repellat perferendis consectetur sit doloribus est totam? Dolor, facere autem, placeat praesentium rerum maiores inventore amet ducimus labore tempora et neque similique sint aut numquam, vitae debitis ipsa odit? Quasi deserunt voluptatum optio consequatur minus ducimus illo laborum tempore suscipit enim vitae, eaque cumque.
      </div>
      {/* <div className="container border4 border-blue-500 grid grid-cols-2">
        <div className="border-4 border-red-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae recusandae consectetur placeat distinctio dolorum! Labore ex repellat et voluptas ratione optio, deserunt itaque maiores tempora culpa vero odio. Quas, ex? Nostrum repudiandae minus aliquam placeat autem illum, dolores tempora, quos optio earum nulla odio sunt nobis perspiciatis distinctio quaerat cum, animi aliquid architecto laudantium nesciunt maxime molestiae. Veritatis quaerat architecto autem amet magni ipsam eius tenetur commodi veniam exercitationem praesentium velit fuga tempore illo, debitis aliquid magnam, accusamus ratione odio vel officia quos perspiciatis aut. Quam recusandae error sapiente vero asperiores illo itaque ipsum commodi quo exercitationem accusantium, eos, laudantium velit doloribus nostrum? Nobis dolore adipisci mollitia quas perspiciatis provident recusandae sed nesciunt magni exercitationem officia error cumque aliquid quam illo sint, explicabo deserunt sapiente beatae aut accusamus similique quisquam a molestiae! Minima rerum quam accusantium culpa velit, iure veniam adipisci rem aspernatur unde excepturi sit nisi, sunt alias doloribus voluptatem consequatur commodi porro omnis corrupti. Atque dicta alias eveniet reprehenderit perferendis facilis quos! Nulla quaerat libero asperiores enim, fugiat provident ut repellat accusamus, deleniti porro sint vel beatae! Mollitia dolores obcaecati nobis a velit minima, incidunt in earum impedit magni expedita vero, perspiciatis itaque. Ullam eum ipsam explicabo veritatis et repellendus ad atque necessitatibus? Officia quo odio sunt dolorum, similique nihil consectetur error iste culpa delectus nam, libero ipsam accusantium deleniti repellendus, quasi sapiente debitis vitae mollitia quia quos. A delectus, veniam eaque porro vel debitis laboriosam deleniti ad veritatis accusamus hic itaque quia commodi officiis aliquam similique aliquid maxime quas odit doloremque. Aut sed ducimus dolorem cupiditate quas dolorum nihil maxime veniam sapiente culpa fuga vel voluptatum non officia dolores, tempora illum itaque quae beatae veritatis sequi autem praesentium nesciunt quos. Corrupti beatae voluptas nesciunt doloribus a eaque explicabo unde dolorum esse, inventore necessitatibus alias ex nulla aperiam, ipsa ullam placeat perferendis fugiat possimus. Corrupti nemo perspiciatis quaerat laboriosam quas. Aliquid aliquam sunt nesciunt quae blanditiis numquam perferendis nemo non. Qui, deserunt culpa. Deleniti itaque neque quod quia reiciendis minus explicabo iste iusto esse quibusdam ad, dolores recusandae aspernatur repellat consectetur fugiat odio fuga, distinctio accusamus nam, libero aliquam corporis numquam! Voluptates aliquam magnam veniam, illum, quam ipsa sunt delectus aspernatur quia ut non quod mollitia totam distinctio earum cumque debitis architecto necessitatibus facilis, asperiores velit! Amet, omnis? Modi deserunt deleniti nesciunt beatae veniam eveniet ullam distinctio, id commodi dolorum aperiam quod nobis suscipit cupiditate quibusdam excepturi sint numquam tempore! Sit nam corrupti natus modi aliquam quod quae in repellat praesentium doloribus aut magni quia exercitationem voluptatibus, iure dignissimos explicabo laboriosam quis nostrum pariatur, minima id. Labore, doloribus accusantium aliquid qui facilis voluptate modi explicabo cupiditate quo deleniti tempora rerum animi. Ipsam cupiditate praesentium fugit culpa architecto quae eum neque sed. Alias ea aliquid quasi omnis maxime autem, quaerat nostrum, tempore consectetur et ex quas nesciunt numquam obcaecati delectus saepe placeat. Velit, a. Excepturi voluptate perspiciatis labore! Nemo voluptates aut nesciunt repellendus obcaecati aperiam maxime accusantium possimus iusto magnam? Dignissimos vitae deleniti id ipsum, ad doloribus? Harum, at.
        </div>
        <div className="border-4 border-red-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nam maxime nisi accusamus, ex, unde quis ut, natus cumque ea laudantium nemo eaque quo aperiam perferendis molestias modi! Qui officia culpa iusto aut delectus earum facilis. Quidem saepe temporibus cupiditate. Architecto maxime esse accusantium amet consequatur veniam animi temporibus voluptas fugiat assumenda eveniet exercitationem officia dolore quasi dolor, enim est odio vitae at dolorum harum, ea sequi necessitatibus accusamus. Ullam facilis laborum veritatis dignissimos quam nemo iste cumque quos eveniet incidunt repellendus repudiandae adipisci, in sequi mollitia dicta ipsa ut architecto, eius esse voluptatibus reiciendis perferendis enim? Molestias in, id vitae hic illo eaque nihil enim et inventore! Cumque repellat placeat sit fugiat, quaerat laborum odit repellendus incidunt molestiae magnam vitae pariatur excepturi, nam ipsa blanditiis! Dolorem eos in consequuntur nesciunt, nihil minima possimus repudiandae voluptas culpa harum corporis nulla doloremque, fugiat sed adipisci animi deserunt at vel commodi qui, autem laudantium. Nostrum consectetur odio magnam alias id error aperiam ducimus culpa itaque! Eligendi dignissimos deserunt libero fugit culpa iste delectus placeat ipsa harum molestias, illo quisquam sequi blanditiis quo corporis alias temporibus facilis cupiditate exercitationem, saepe amet. Eum perspiciatis incidunt dolorum amet! Optio autem omnis veniam odit earum asperiores.
        </div>
      </div> */}
    </main>
  )
}

export default Home