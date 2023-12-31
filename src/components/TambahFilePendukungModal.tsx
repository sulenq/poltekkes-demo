import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Plus } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import * as yup from "yup";
import { useFormik } from "formik";
import RequiredForm from "./RequiredForm";
import FilesInput from "./FilesInput";
import useBackOnClose from "../utils/useBackOnClose";

export default function TambahFilePendukungModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose(isOpen, onClose);

  const formik = useFormik({
    validateOnChange: false,

    initialValues: {
      filePendukung: "",
      keterangan: "",
    },

    validationSchema: yup.object().shape({
      filePendukung: yup
        .array()
        .required("File Pendukung harus diunggah minimal 1")
        .test("fileType", "Hanya file PDF yang diperbolehkan", (value) =>
          value.every((file) => file.type === "application/pdf")
        )
        .test("fileSize", "Ukuran maksimal file adalah 1 MB", (value) =>
          value.every((file) => file.size <= 1000000)
        ),
      keterangan: yup.string(),
    }),

    onSubmit: (values, { resetForm }) => {
      //TODO berkas pendukung

      console.log(values);
    },
  });

  const handleOnClose = () => {
    onClose();
    window.history.back();
  };

  return (
    <>
      <Button
        leftIcon={<Icon as={Plus} fontSize={iconSize} weight="bold" />}
        colorScheme="ap"
        className="lg-clicky"
        mb={4}
        onClick={onOpen}
        pl={"12px"}
      >
        Tambah File Pendukung
      </Button>

      <Modal isOpen={isOpen} onClose={handleOnClose} size={"xl"}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Masukkan File Pendukung</ModalHeader>

          <ModalBody>
            <Alert
              status="warning"
              variant={"left-accent"}
              mb={4}
              alignItems={"flex-start"}
              minW={"100% !important"}
              borderRadius={8}
            >
              <AlertIcon mt={"2px"} />
              <Box>
                <AlertTitle>
                  <Text
                    fontSize={[18, null, 20]}
                    fontWeight={600}
                    color={"orange.500"}
                  >
                    PERHATIAN!!
                  </Text>
                </AlertTitle>
                <AlertDescription>
                  Format berkas pendukung berupa <b>PDF</b>, <b>maks. 1 MB</b>
                </AlertDescription>
              </Box>
            </Alert>

            <form id="filePendukungForm" onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.errors.filePendukung ? true : false}
                mb={4}
              >
                <FormLabel>
                  Unggah Foto Sampel
                  <RequiredForm />
                </FormLabel>
                <FilesInput
                  formik={formik}
                  name={"filePendukung"}
                  accept={".pdf"}
                />
                <FormErrorMessage>
                  {formik.errors.filePendukung}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.keterangan ? true : false}>
                <FormLabel>Keterangan</FormLabel>
                <Textarea
                  name="keterangan"
                  onChange={formik.handleChange}
                  placeholder="Masukkan catatan anda"
                />
                <FormErrorMessage>{formik.errors.keterangan}</FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              form="filePendukungForm"
              colorScheme="ap"
              className="lg-clicky"
            >
              Simpan & Lanjutkan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
