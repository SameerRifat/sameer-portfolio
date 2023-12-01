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
    <main className='pt-36'>
      <Hero />
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