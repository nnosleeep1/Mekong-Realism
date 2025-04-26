import React from 'react';
import Hero from '../components/Hero';
import ExperienceCard from '../components/ExperienceCard';
import Footer from '../components/Footer';

// Import hình ảnh
import caiRangMarketImage from '../assets/hero-image.jpg';
import cocoaMuoiCuongImage from '../assets/hero-image.jpg';
import mekongRiverTourImage from '../assets/hero-image.jpg';
import ricefieldCanThoImage from '../assets/hero-image.jpg';
import noodleFactoryImage from '../assets/hero-image.jpg';
import boatTripCanThoImage from '../assets/hero-image.jpg';
import bikeTripCanThoImage from '../assets/hero-image.jpg';
import phongDienMarketImage from '../assets/hero-image.jpg';
import sonIsletImage from '../assets/hero-image.jpg';

function HomePage() {
  const experiences = [
    {
      image: caiRangMarketImage,
      title: 'Chợ nổi Cái Răng',
      description: 'Khám phá chợ nổi lớn nhất Đồng bằng sông Cửu Long với hàng trăm thuyền bè tấp nập.',
      link: '/tour/cho-noi-cai-rang',
    },
    {
      image: cocoaMuoiCuongImage,
      title: 'Vườn ca cao Mười Cương',
      description: 'Tìm hiểu quy trình trồng và chế biến ca cao tại một trong những nhà vườn nổi tiếng.',
      link: '/tour/vuon-ca-cao-muoi-cuong',
    },
    {
      image: mekongRiverTourImage,
      title: 'Du thuyền sông Mekong',
      description: 'Trải nghiệm vẻ đẹp thanh bình của sông Mekong và khám phá cuộc sống địa phương.',
      link: '/tour/du-thuyen-song-mekong',
    },
    {
      image: ricefieldCanThoImage,
      title: 'Ruộng lúa Cần Thơ',
      description: 'Chiêm ngưỡng những cánh đồng lúa xanh mướt và tìm hiểu về nghề trồng lúa.',
      link: '/tour/ruong-lua-can-tho',
    },
    {
      image: noodleFactoryImage,
      title: 'Lò hủ tiếu truyền thống',
      description: 'Xem quy trình làm hủ tiếu thủ công và thưởng thức món ăn đặc sản này.',
      link: '/tour/lo-hu-tieu-can-tho',
    },
    {
      image: boatTripCanThoImage,
      title: 'Đi thuyền khám phá Cần Thơ',
      description: 'Du ngoạn trên những con kênh nhỏ và khám phá những nét độc đáo của vùng đất này.',
      link: '/tour/thuyen-can-tho',
    },
    {
      image: bikeTripCanThoImage,
      title: 'Đạp xe khám phá Cần Thơ',
      description: 'Trải nghiệm cuộc sống địa phương bằng xe đạp qua những con đường quê yên bình.',
      link: '/tour/xe-dap-can-tho',
    },
    {
      image: phongDienMarketImage,
      title: 'Chợ nổi Phong Điền',
      description: 'Ghé thăm một chợ nổi khác với những nét đặc trưng riêng biệt.',
      link: '/tour/cho-noi-phong-dien',
    },
    {
      image: sonIsletImage,
      title: 'Cồn Sơn',
      description: 'Khám phá cồn Sơn xanh mát với những vườn trái cây và làng nghề truyền thống.',
      link: '/tour/con-son',
    },
  ];

  return (
    <div>
      <Hero />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-500 mb-8">Trải nghiệm đặc sắc tại Cần Thơ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;