//internal import
import Layout from '@layout/Layout';
import useFilter from '@hooks/useFilter';
import Card from '@component/cta-card/Card';
import OfferCard from '@component/offer/OfferCard';
import StickyCart from '@component/cart/StickyCart';
import ProductServices from '@services/ProductServices';
import ProductCard from '@component/product/ProductCard';
import MainCarousel from '@component/carousel/MainCarousel';
import FeatureCategory from '@component/category/FeatureCategory';
import FeatureCard from '@component/feature-card/FeatureCard';

const Home = ({ products }) => {
  const { productData } = useFilter(products);
  return (
    <>
      <Layout>
        <div className="min-h-screen">
          <StickyCart />
          <div className="bg-white">
            <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
              <div className="flex w-full">
                <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
                  <MainCarousel />
                </div>
                <div className="w-full hidden lg:flex">
                  <OfferCard />
                </div>
              </div>
            </div>
            <div className="hidden relative lg:block mx-auto max-w-screen-2xl px-3 sm:px-10">
              <FeatureCard />
            </div>
          </div>

          {/* feature category's */}
          <div className="bg-white lg:py-20 pb-10 pt-5">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                    Featured Categories
                  </h2>
                  <p className="text-base font-sans text-gray-600 leading-6">
                    Choose your necessary products from this feature categories.
                  </p>
                </div>
              </div>
              <FeatureCategory />
            </div>
          </div>

          {/* popular products */}
          <div className="bg-gray-50 lg:py-20 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                  Popular Products for Daily Shopping
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                  See all our popular products in this week. You can choose your
                  daily needs products from this list and get some special offer
                  with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {productData?.slice(0, 18).map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* promotional banner card */}
          <div className="block">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="grid gap-3 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
                <Card />
              </div>
            </div>
          </div>

          {/* discounted products */}
          <div className="bg-gray-50 lg:py-20 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                  Latest Discounted Products
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                  See Our latest discounted products below. Choose your daily
                  needs from here and get a special discount with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {productData?.slice(0, 18).map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  let products = await ProductServices.getAllProducts();
  products = products.filter(product => product.status === "Show")

  return {
    props: {
      products: products.slice(0, 120),
    },
    revalidate: 20,
  };
};

export default Home;