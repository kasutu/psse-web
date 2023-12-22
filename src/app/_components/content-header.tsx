import { cn } from "@/utils/styles";
import Balance from "react-wrap-balancer";

export function ContentHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn("flex max-w-full flex-col items-center gap-2", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function ContentHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]",
        className,
      )}
      {...props}
    />
  );
}

export function ContentHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        "text-center text-sm text-muted-foreground sm:text-xl",
        className,
      )}
      {...props}
    />
  );
}

export function ContentHeaderAuthor({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex max-w-full flex-col items-center gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function ContentHeaderImage({
  className,
  src,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { src: string }) {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={cn(
        "h-[240px] w-full rounded-lg bg-primary-foreground bg-cover bg-center sm:h-[540px]",
        className,
      )}
      {...props}
    />
  );
}
