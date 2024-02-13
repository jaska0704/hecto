import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { DiscountItem } from '../discount-item/discount-item'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    "Wood Chair": [
      {
        id: 1,
        img: "/discount-img/divan3.png",
      }
    ],
    "Plastic Chair": [
      {
        id: 1,
        img: "/discount-img/divan2.png",
      }
    ],
    "Sofa Colletion": [
      {
        id: 1,
        img: "/discount-img/divan1.png",
      }
    ],
  })

  return (
    <div className="max-w-[1180px] mx-auto w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex justify-center gap-4 font-['Lato'] text-lg text-[#151875] space-x-1 rounded-xl p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className=" hover:text-[#FB2E86] border-b-2 border-transparent hover:border-[#FB2E86] p-1"
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
                {posts.map((post) => (
                 <DiscountItem img={post.img}/>
                ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
