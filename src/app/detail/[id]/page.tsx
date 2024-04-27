import MainLayout from "@/pages/component/common/MainLayout";
import Detail from "@/pages/component/detail/Detail";

export default function ProductDetail({ params }: { params: { id: number } }) {
  return (
    <div>
      <MainLayout>
        <Detail id={params.id} />
      </MainLayout>
    </div>
  );
}
