import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id?: string;
  title?: string;
  image?: string;
  description?: string;
  downloadLink?: string;
}

const ResourceCard = ({ id, title, image, description, downloadLink }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={downloadLink || "#"} target="_blank">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            {image && (
              <Image
                src={image}
                className="h-full rounded-md object-cover"
                width={384}
                height={440}
                alt={title || "Resource"}
              />
            )}
          </div>
          {title && (
            <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
              {title}
            </CardTitle>
          )}
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        {description && (
          <p className="body-regular text-white-400">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
