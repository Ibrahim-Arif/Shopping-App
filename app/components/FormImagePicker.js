import React from "react";
import { useFormikContext } from "formik";

import ErrorText from "./ErrorText";
import ImagePickerList from "./ImagePickerList";

function FormImagePicker({ title }) {
  const { values, setFieldValue } = useFormikContext();

  return (
    <>
      <ImagePickerList
        imageUris={values[title]}
        onAdd={(image) => setFieldValue(title, [...values[title], image])}
        onDelete={(image) =>
          setFieldValue(
            title,
            values[title].filter((i) => i !== image)
          )
        }
      />
      <ErrorText title={title} />
    </>
  );
}

export default FormImagePicker;
