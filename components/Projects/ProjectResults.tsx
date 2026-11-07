import { List, ScrollArea } from "@mantine/core";
import { useRef } from "react";

interface Props {
  results: Array<string>;
}

export function ProjectResults({ results }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollArea
      viewportRef={viewportRef}
      offsetScrollbars
      scrollbars="y"
      type="auto"
      onWheel={(e) => {
        if (viewportRef.current) {
          e.stopPropagation();
          viewportRef.current.scrollTop += e.deltaY;
        }
      }}
    >
      <List size="sm" spacing="xs" mt="md" c="dimmed">
        {results.map((result) => (
          <List.Item key={result}>{result}</List.Item>
        ))}
      </List>
    </ScrollArea>
  );
}
