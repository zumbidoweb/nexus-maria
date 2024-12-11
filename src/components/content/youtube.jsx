"use client"

export default function YouTube({ id }) {
  return (
    <div>
      <iframe
        className="aspect-video w-full mt-16 mb-4"
        data-scroll data-scroll-speed="2"
        src={"https://www.youtube.com/embed/" + id + "?version=3&vq=hd1080p"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};