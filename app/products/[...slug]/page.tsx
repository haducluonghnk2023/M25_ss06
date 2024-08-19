import React from "react";
interface Product {
  slug: string;
}
interface Props {
  params: Product;
}
export default function ProductDetail(props: Props) {
  console.log(props);
  const { params } = props;

  return <div>Trang chi tiết sản phẩm có id:{params.slug}</div>;
}
