import Image from 'next/image';
export default function mountain() {
  return (
    <Image
      src="/images/mountain.jpg"
      width="1280"
      height="720"
      layout="responsive"
    />
  );
}
