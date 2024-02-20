import HeaderComponent from '@/components/Header';
import Image from 'next/image';

const productList = [
  {
    name: 'Intel Wi-Fi Link 5100 Series ID Label',
    imageLink: '/wifilink.png',
  },
  {
    name: 'Intel Gigabit CT Desktop Adapter',
    imageLink: '/desktopadapter.png',
  },
  {
    name: 'Lenovo ThinkCentre Neo 50s G3 SFF Desktop',
    imageLink: '/thinkcentre.png',
  },

  {
    name: 'Seagate 1TB 7200RPM SATA 6.0 Gbps 3.5',
    imageLink: '/seagatehdd.jpg',
  },
  {
    name: 'Dell PowerEdge R720 2U Server',
    imageLink: '/dellserver.jpg',
  },
  {
    name: 'Intel Xeon Gold 5215M',
    imageLink: '/intelcpu.jpg',
  },
  {
    name: '4TB 7.2K RPM SATA 6Gbps 3.5in Cabled Hard Drive',
    imageLink: '/hdd.png',
  },
  {
    name: '8GB - 1RX8 DDR4 UDIMM 2666MHz ECC',
    imageLink: '/dell8gb.jpg',
  },
  {
    name: 'Broadcom 5720 DP 1Gb Network Interface Card',
    imageLink: '/networkinterfacecard.png',
  },
  {
    name: 'Linksys LGS318 18-Port Business Gigabit Smart Switch',
    imageLink: '/intelcpu.jpg',
  },
  {
    name: 'Linksys Max-Stream AC600 Wi-Fi Micro USB Adapter',
    imageLink: '/microusb.jpg',
  },
  {
    name: 'Linksys AC6600 Velop Intelligent Mesh WiFi System, 3-Pack',
    imageLink: '/meshwifi.jpg',
  },
];

export default function Component() {
  return (
    <>
      <HeaderComponent />
      <section className='w-full py-12 md:px-6'>
        <div className='container grid gap-6 md:gap-8 px-4 md:px-6'>
          <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'>
            <h1 className='text-3xl font-bold tracking-tight'>Our Products</h1>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 items-start'>
            {productList.map((prod, idx) => {
              return (
                <div
                  key={idx}
                  className='relative group flex flex-col rounded-lg overflow-hidden'
                >
                  <div className='image-container grid md:h-[300px]'>
                    {/* Added grid and height */}
                    <Image
                      alt={prod.name}
                      height={300}
                      src={prod.imageLink}
                      width={300}
                    />
                  </div>
                  <div className='flex-1 p-4 grid gap-1 mt-4'>
                    <h3 className='font-semibold'>{prod.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
