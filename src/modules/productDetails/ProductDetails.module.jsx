import ProductDetailsTitle from './component/productDetailsTitle/ProductDetailsTitle';
import ProductDetailsBuy from './component/productDetailsBuy/ProductDetailsBuy';
import ProductDetailsDescription from './component/productDetailsDescription/ProductDetailsDescription';
import { ProductDetailsWrapper } from './styled';

const dataFake = {
  _id: '62f4673ee45c50465d71493e',
  name: "Giày Thể Thao Cao Cấp Nam Biti's Hunter Layered Upper DSMH02800DEN (Đen)",
  description:
    'Cải tiến thiết kế độc đáo với xu hướng #layer từ những “đường cắt” chất liệu đan xen, lần đầu tiên có mặt tại gia đình Thợ Săn. Sở hữu công nghệ vượt trội chuẩn Hunter X, \' | - sẵn sàng cùng bạn khuấy động mùa hè sôi động:\n\nBộ đế LiteFlex và chất liệu IP "nhẹ như bay", chiều cao đế đạt tới 5cm, cùng độ đàn hồi tối ưu >40%​\n\nĐế lót kháng khuẩn với công nghệ 6 điểm massage lòng bàn chân êm ái cho cả ngày dài\n\nMũ quai vải dệt cải tiến tối đa co dãn và thoáng khí tối đa\n\nĐặc biệt, mũ quai nhiều lớp layers định hình và giữ form giày cực tốt cùng bạn “tung hoành" trên từng hành trình khám phá',
  price: 932000,
  quantity: 200,
  trademarkId: null,
  categoryId: '62f4669ce45c50465d714939',
  thumbnail: 'https://salt.tikicdn.com/cache/400x400/ts/product/c9/b5/db/ec0116477e330664dfdb0e8e76811320.jpg.webp',
  images: [
    'https://salt.tikicdn.com/cache/100x100/ts/product/4e/0a/f4/0d4cad05a033ec544e8e5c4ee9228c72.jpg.webp',
    'https://salt.tikicdn.com/cache/100x100/ts/product/3c/54/d0/d923496bdde48a9b133bbcf13003b436.jpg.webp',
    'https://salt.tikicdn.com/cache/100x100/ts/product/23/30/59/f3bdbed3f4ae7d65c184be367ef91762.jpg.webp',
    'https://salt.tikicdn.com/cache/100x100/ts/product/52/63/19/9904816e155da32d74db43b731fe3ba2.jpg.webp',
  ],
  userId: '624fa99da6177f1135406616',
  createDate: '2022-08-11T02:19:42.445Z',
  updateDate: null,
  rate: 4,
  discount: 0,
  numberOfSell: 0,
};
const ProductDetailsModule = () => {
  return (
    <ProductDetailsWrapper>
      <ProductDetailsTitle
        categoryId={dataFake.categoryId}
        nameProduct={dataFake.name}
        numberOfSell={dataFake.numberOfSell}
      />
      <ProductDetailsBuy thumbnail={dataFake.thumbnail} listImg={dataFake.images} />
      <ProductDetailsDescription />
    </ProductDetailsWrapper>
  );
};

export default ProductDetailsModule;
