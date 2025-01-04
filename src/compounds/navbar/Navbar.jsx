'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import logo from '../../assets/image/logo.png'
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex p-6 lg:flex-1">
            <img
              alt=""
              src={logo}
              className="h-8 w-auto"
            />
         
        </div>
        <div className="flex lg:hidden">
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className=" button -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
          
            <Bars3Icon aria-hidden="true" className="size-6 font-bold" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <button className="button text-sm/6 font-semibold">HOME</button>
          <button className="button text-sm/6 font-semibold">Features</button>
          <button className="button text-sm/6 font-semibold">Features</button>
          <button className="button text-sm/6 font-semibold">Features</button>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            <button className='button'> Product</button>
              
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <p className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <p
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </p>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 gap-4 lg:justify-end">
          
        <button className="button text-sm/6 px-5 mx-4font-semibold">LOGIN<label aria-hidden="true">&rarr;</label></button>
       
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-4 justify-between">
         
              
              <img
                alt=""
                src={logo}
                className="h-8 w-auto "
              />
        
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="cbutton -m-2.5 rounded-md p-2.5 text-gray-700"
            >
              
              <XMarkIcon aria-hidden="true" className="size-6 font-bold" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  <button className="button text-sm/6 font-semibold">Features</button>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <button className="button text-sm/6 font-semibold">Features</button>
                <button className="button text-sm/6 font-semibold">Features</button>
                <button className="button text-sm/6 font-semibold">Features</button>
                <button className="button text-sm/6 font-semibold">Features</button>
              </div>
              <div className="py-6">
              <button className="button text-sm/6 font-semibold">LOGIN <b><label aria-hidden="true">&rarr;</label></b></button>
              
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
