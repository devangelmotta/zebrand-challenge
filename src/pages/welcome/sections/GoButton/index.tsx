import Link from 'components/Link';
import Button from 'components/Button';
import Text from 'components/Text';
import { BsArrowRight } from "react-icons/bs";

export const GoButton = () => (
        <Button 
            borderRadius="10px"
            width="98%"
            height="100px"
            margin="10px 10px"
            justifyContent="center"
            border="none"
            outline 
            color="white">
            <Text
                fontSize="2rem"
                fontWeight="medium">
                Go to <BsArrowRight/>
            </Text>
        </Button>
)