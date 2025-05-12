import CustomPortableText from "@/components/CustomPortableText";
import { PortableTextBlock, SanityDocument } from "next-sanity";

interface RichTextSectionProps {
  section: SanityDocument;
}

export default async function RichTextSection({
  section,
}: RichTextSectionProps) {
  return (
    <section className="section">
      <div className="container">
        <CustomPortableText content={section.richText} />
      </div>
    </section>
  );
}
