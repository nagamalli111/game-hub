import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
function GenreList({ onSelectGenre }: Props) {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
