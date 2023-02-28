import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { TestimonialsData } from "../../data";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h3 className="main-title mb-5">Clients Say</h3>
      <Swiper
        className="pb-5"
        modules={[Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
      >
        {TestimonialsData.map((testiItem) => {
          return (
            <SwiperSlide key={testiItem.id} className="col-lg-4">
              <div className="testi-box rounded-4">
                <div className="testi-box-item p-3 rounded-4">
                  <div className="testi-img">
                    <img
                      src={testiItem.img}
                      className="img-fluid w-100 d-block"
                      alt="testimonials"
                      title={testiItem.name}
                    />
                  </div>
                  <p className="testi my-3 fw-bold">{testiItem.testi}</p>
                  <p className="testi-info">
                    {testiItem.name},{" "}
                    <small className="fw-bold">{testiItem.job}</small>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
