import CustomPortableText from "@/components/CustomPortableText";
import { PortableTextBlock } from "next-sanity";

interface RichTextSectionProps {
  section: { richText: PortableTextBlock };
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
