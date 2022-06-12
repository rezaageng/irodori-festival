import Image from 'next/image';

const notFound = () => (
  <div className="min-h-screen grid place-content-center text-irodori-tertiary">
    <Image
      src="/assets/icons/kazu_sleep.webp"
      alt="kazuha sleep"
      width={160}
      height={122}
    />
    <span className="text-center w">strawberries yum~</span>
  </div>
);

export default notFound;
