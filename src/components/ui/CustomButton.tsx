import { Button } from "@heroui/react";
type TCustomButton = {
    type: "button" | "submit" | "reset";
    color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    text: string;
    onPress?: () => void;
    icon?: React.ReactNode;
    isDisabled?: boolean;
}

const CustomButton = ({ type, color, text = 'click here', onPress, icon, isDisabled }: TCustomButton) => {
    return (
        <div>
            <Button type={type} color={color} onPress={onPress} startContent={icon} isDisabled={isDisabled} className="text-white text-sm font-medium w-full">
                {text}
            </Button>
        </div>
    )
}

export default CustomButton