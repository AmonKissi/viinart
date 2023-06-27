import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">Discover all there is to know about Viinart.</p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author.slug}`}>
                <Image
                  src={imageProps.src}
                  alt={author.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mx-auto prose text-center dark:prose-invert mt-14">
        <p>
        Viinart, a highly skilled Artist and Painter, has been honing his craft since a tender age, showcasing a remarkable talent that has blossomed over the years. With a deep passion for art, Viinarts journey as a creative individual began early on, driven by an innate desire to express himself through visual mediums.


        </p>
        <p>
        Throughout his artistic career, Viinart has dedicated countless hours to refining his techniques and expanding his artistic repertoire. His commitment to continuous growth and exploration has led him to embrace various styles and mediums, allowing him to push the boundaries of his creativity and create truly captivating works of art.
        </p>
        <p>
        Viinarts artistic prowess shines through in every stroke of his brush, with each piece reflecting a profound understanding of form, color, and composition. His keen eye for detail and meticulous approach lend a sense of realism and depth to his paintings, drawing viewers into his vibrant and evocative world.
        </p>
        <p>
        As an Artist and Painter, Viinart possesses the ability to breathe life into his subjects, capturing their essence and imbuing them with emotions that resonate with the observer. Whether portraying captivating landscapes, stirring portraits, or thought-provoking abstract pieces, Viinarts art evokes a profound emotional response and invites viewers to experience the beauty and complexity of the human experience.
        </p>
        <p>
        With a rich and diverse portfolio, Viinarts work has garnered recognition and admiration from art enthusiasts and collectors alike. His artistic endeavors have been showcased in prestigious exhibitions, galleries, and online platforms, earning him acclaim for his unique artistic vision and technical prowess.
        </p>
        <p>
        Driven by a passion that knows no bounds Viinart continues to push the boundaries of his creativity, constantly seeking new inspirations and avenues for artistic expression. With each new creation, he invites viewers to embark on a visual journey, where art becomes a conduit for emotions, storytelling, and a celebration of the human spirit.
        </p>
        <p>
        Viinarts dedication to his craft combined with his natural talent and unwavering passion positions him as a notable and respected figure in the realm of art. As he continues to captivate audiences with his remarkable talent Viinarts artistic journey promises to leave an indelible mark on the art world for years to come.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
