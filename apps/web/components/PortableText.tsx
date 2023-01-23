import Link from "next/link";
import ReactPortableText from "react-portable-text";

// Debugging
import { blockContentToPlainText } from "react-portable-text";

type PortableTextProps = {
  portableTextContent: any;
};

type ChildrenProp = {
  children: React.ReactNode;
};

const PortableText = ({ portableTextContent }: PortableTextProps) => {
  //   return (
  //     <meta
  //       name="description"
  //       content={blockContentToPlainText(portableTextContent)}
  //     />
  //   );

  return (
    <div>
      <ReactPortableText
        // Pass in block content straight from Sanity.io
        content={portableTextContent}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        // Optionally override marks, decorators, blocks, etc. in a flat
        // structure without doing any gymnastics
        serializers={{
          h1: (props: any) => (
            <h1
              className="text-gray-800 text-4xl mb-2 mt-3 font-bold"
              {...props}
            />
          ),
          h2: (props: any) => (
            <h2
              className="text-gray-800 text-3xl mb-2 mt-3 font-bold"
              {...props}
            />
          ),
          h3: (props: any) => (
            <h3
              className="text-gray-800 text-2xl mb-2 mt-3 font-bold"
              {...props}
            />
          ),
          h4: (props: any) => (
            <h4
              className="text-gray-800 text-xl mb-2 mt-3 font-bold"
              {...props}
            />
          ),
          h5: (props: any) => (
            <h5
              className="text-gray-800 text-lg mb-2 mt-3 font-bold"
              {...props}
            />
          ),
          h6: (props: any) => (
            <h6
              className="text-gray-800 text-base mb-2 mt-3 font-bold"
              {...props}
            />
          ),
          normal: (props: any) => (
            <p className="text-gray-600 mb-3" {...props} />
          ),
          li: ({ children }: { children: any }) => (
            <li className="special-list-item">{children}</li>
          ),
          blockquote: ({ children }: ChildrenProp) => (
            <div className="flex gap-x-3 my-5 bg-gray-100">
              <div className="w-2 bg-blue-600" />
              <div className="py-4 text-gray-500">{children}</div>
            </div>
          ),
          link: (props: any) => (
            <Link
              href={props.href}
              className="underline text-blue-600 hover:no-underline"
            >
              {props.children}
            </Link>
          ),
          someCustomType: PortableText,
        }}
      />
    </div>
  );
};

export default PortableText;
