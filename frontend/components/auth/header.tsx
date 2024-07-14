import Image from "next/image";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Image
        src="assets/images/logo.svg"
        alt="Evently logo"
        width={128}
        height={38}
      />
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
