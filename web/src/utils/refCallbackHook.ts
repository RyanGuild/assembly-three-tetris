import React, { useCallback, useRef } from "react";

export default function useRefCallback<T = HTMLElement>(
  cb: (data: T) => void,
  cleanup?: (refCurrent: React.MutableRefObject<T | null>) => void
) {
  const ref = useRef<T>(null);
  const setRef = useCallback(
    (node: T | null) => {
      if (ref.current && cleanup) {
        cleanup(ref);
      }

      if (node) {
        cb(node);
      }

      // Save a reference to the node
      //@ts-ignore
      ref.current = node;
    },
    [cleanup, cb]
  );

  return [setRef];
}
