import DefaultLayout from "@/component/DefaultLayout";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Page = () => {
  return (
    <DefaultLayout>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/image1.png"
              width={300}
              height={300}
              alt="user"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 flex bg-[#E3E2E2] p-5 rounded-b-lg z-10">
              <div>
                <h3 className="font-semibold">Emmanuel Chisom Eze</h3>
                <p className="text-sm">Leadership & Business</p>
              </div>
              <BsFillPatchCheckFill className="text-blue-500 mt-1 ml-2" />
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/image.png"
              width={300}
              height={300}
              alt="user"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 flex bg-[#E3E2E2] p-5 rounded-b-lg z-10">
              <div>
                <h3 className="font-semibold">Stella Ogochukwu</h3>
                <p className="text-sm">Professional/Expert</p>
              </div>
              <BsFillPatchCheckFill className="text-blue-500 mt-1 ml-2" />
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/image1.png"
              width={300}
              height={300}
              alt="user"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 flex bg-[#E3E2E2] p-5 rounded-b-lg z-10">
              <div>
                <h3 className="font-semibold">Emmanuel Chisom Eze</h3>
                <p className="text-sm">Leadership & Business</p>
              </div>
              <BsFillPatchCheckFill className="text-blue-500 mt-1 ml-2" />
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/image.png"
              width={300}
              height={300}
              alt="user"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 flex bg-[#E3E2E2] p-5 rounded-b-lg z-10">
              <div>
                <h3 className="font-semibold">Stella Ogochukwu</h3>
                <p className="text-sm">Professional/Expert</p>
              </div>
              <BsFillPatchCheckFill className="text-blue-500 mt-1 ml-2" />
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/image1.png"
              width={300}
              height={300}
              alt="user"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 flex bg-[#E3E2E2] p-5 rounded-b-lg z-10">
              <div>
                <h3 className="font-semibold">Emmanuel Chisom Eze</h3>
                <p className="text-sm">Leadership & Business</p>
              </div>
              <BsFillPatchCheckFill className="text-blue-500 mt-1 ml-2" />
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/image.png"
              width={300}
              height={300}
              alt="user"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 flex bg-[#E3E2E2] p-5 rounded-b-lg z-10">
              <div>
                <h3 className="font-semibold">Stella Ogochukwu</h3>
                <p className="text-sm">Professional/Expert</p>
              </div>
              <BsFillPatchCheckFill className="text-blue-500 mt-1 ml-2" />
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/image1.png"
              width={300}
              height={300}
              alt="user"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 flex bg-[#E3E2E2] p-5 rounded-b-lg z-10">
              <div>
                <h3 className="font-semibold">Emmanuel Chisom Eze</h3>
                <p className="text-sm">Leadership & Business</p>
              </div>
              <BsFillPatchCheckFill className="text-blue-500 mt-1 ml-2" />
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/image.png"
              width={300}
              height={300}
              alt="user"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 flex bg-[#E3E2E2] p-5 rounded-b-lg z-10">
              <div>
                <h3 className="font-semibold">Stella Ogochukwu</h3>
                <p className="text-sm">Professional/Expert</p>
              </div>
              <BsFillPatchCheckFill className="text-blue-500 mt-1 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Page;
