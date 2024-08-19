import React from "react";

export default function page(props: any) {
  console.log(props);
  const { params } = props;
  const path = params.slug.join("/");
  return <div>Bạn đang xem bài viết với đường dẫn:{path}</div>;
}
