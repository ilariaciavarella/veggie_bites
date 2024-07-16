import fallbackImage from '../images/veggie_bites-no_image.jpg';

export default function replaceImage({ currentTarget }) {
    currentTarget.onerror = null;
    currentTarget.src = fallbackImage;
}