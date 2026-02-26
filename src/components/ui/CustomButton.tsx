import { Button } from "@heroui/react";
type TCustomButton = {
    color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    text: string;
    onPress: () => void;
    icon: React.ReactNode;
}

const CustomButton = ({ color, text = 'click here', onPress, icon }: TCustomButton) => {
    return (
        <div>
            <Button color={color} onPress={onPress} startContent={icon} className="text-white text-sm font-medium">
                {text}
            </Button>
        </div>
    )
}

export default CustomButton