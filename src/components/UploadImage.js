import Dropzone from "react-dropzone";
import { Box, ImageListItem, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { grey, red } from "@mui/material/colors";

export const UploadImage = (props) => {
  const {
    onDrop,
    name,
    accept,
    value,
    multiple,
    imgMaxWidth,
    imgMaxHeight,
    placeholder,
    error,
    placeholderIcon,
    disabled,
    reff,
    imageId,
    helperText,
    onClick,
    mediaType = 'image',
  } = props;
  return (
    <>
      <Dropzone
        onDrop={onDrop}
        multiple={multiple}
        ref={reff}
        noClick={disabled}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} accept={accept} name={name} />
            <Box
              className={`relative border rounded text-center flex flex-col items-center justify-center ${
                disabled ? "cursor-normal" : "cursor-pointer"
              }`}
              onClick={onClick}
              sx={{
                borderColor: error ? red[300] : grey[300],
                borderStyle: value ? "solid" : "dashed",
                backgroundColor: error
                  ? red[50]
                  : value === "" || value === null
                  ? grey[50]
                  : "transparent",
                "&:hover": {
                  borderColor: disabled ? grey[300] : red[500],
                },
                cursor: "pointer",
                textAlign: "center",
              }}
              style={{
                width: imgMaxWidth,
                height: imgMaxHeight,
              }}
            >
              {value === "" && (
                <>
                  {placeholder && (
                    <Typography
                      style={{
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        color: grey[400],
                        fontSize: "14px",
                        marginTop: "12px",
                      }}
                    >
                      {placeholder}
                    </Typography>
                  )}
                  {placeholderIcon && placeholderIcon}
                </>
              )}
              {multiple && value?.length > 0 ? (
                value?.map((l, i) => (
                  <>
                    {l?.includes(".mp4") || l?.includes(".mkv") ? (
                      <video loop autoPlay muted>
                        <source src={l.preview} type="video/mp4" />
                      </video>
                    ) : (
                      <ImageListItem key={i}>
                        <img
                          id={imageId}
                          style={{
                            maxHeight: imgMaxHeight,
                            maxWidth: imgMaxWidth,
                          }}
                          src={l.preview}
                          srcSet={l.preview}
                          alt={l.preview}
                          loading="lazy"
                        />
                      </ImageListItem>
                    )}
                  </>
                ))
              ) : (
                <>
                  {mediaType === "video" || value?.includes(".mp4") || value?.includes(".mkv") ? (
                    <video
                      loop
                      autoPlay
                      muted
                      className="p-5"
                      style={{ maxHeight: imgMaxHeight, maxWidth: imgMaxWidth }}
                    >
                      <source src={value} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      className="p-5"
                      style={{ maxHeight: imgMaxHeight, maxWidth: imgMaxWidth }}
                      src={value}
                      srcSet={value}
                      alt={value}
                      loading="lazy"
                    />
                  )}
                  {value ? (
                    <div className="absolute bottom-0 text-white bg-red w-full rounded-b py-5">
                      <Typography sx={{ fontSize: 14 }}>
                        Remove/Change
                      </Typography>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              )}
            </Box>
          </div>
        )}
      </Dropzone>
      {helperText && (
        <Typography className="text-red-600 mt-5 ml-5" sx={{ fontSize: 12 }}>
          {helperText}
        </Typography>
      )}
    </>
  );
};

UploadImage.defaultProps = {
  multiple: false,
  imgMaxWidth: 100,
  imgMaxHeight: 100,
  value: "",
  error: false,
};

UploadImage.propTypes = {
  onDrop: PropTypes.func,
  name: PropTypes.string,
  accept: PropTypes.string,
  value: PropTypes.any,
  multiple: PropTypes.bool,
  imgMaxWidth: PropTypes.any,
  imgMaxHeight: PropTypes.number,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  placeholderIcon: PropTypes.node,
  disabled: PropTypes.bool,
  reff: PropTypes.any,
  imageId: PropTypes.string,
  helperText: PropTypes.string,
};
