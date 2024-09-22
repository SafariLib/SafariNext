import './Image.styles.css';

interface ImageProps {
    rounded?: boolean;
    src: string;
    alt: string;
    variant?: 'primary' | 'secondary';
    width?: string;
    height?: string;
}

export default function Image({ variant = 'primary', rounded, ...props }: ImageProps) {
    const roundedClass = rounded ? 'sdui-img-rounded' : '';
    const variantClass = ` sdui-img-${variant}`;

    return (
        <div className={`sdui-img${variantClass} ${roundedClass}`}>
            <img {...props} />
        </div>
    );
}
