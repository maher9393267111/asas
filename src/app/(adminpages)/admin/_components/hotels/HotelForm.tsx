"use client";
import { Button, Form, Modal, message, Upload, Input, Checkbox } from "antd";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { SetLoading } from "@/redux/LoadersSlice";
import { uploadImages, deleteImages } from "@/helpers/imageUploadAndDelete";
import axios from "axios";
import { getCatchErrorMessage } from "@/helpers/ErrorMessgaes";
import ModelTitle from "@/components/myComponents/ModelTitle";
import { ProductType } from "@/interfaces";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const locations = ["istanbul", "bursa", "trabzon", "izmir", "izmit"];
const roomTypes = ["single" ,"double"];

function HotelForm({
  showCategoryForm,
  setShowCategoryForm,
  selectedCategory,
  setSelectedCategory,
  reloadCategories,
}: HotelFormProps) {
  const dispatch = useDispatch();

  const [files, setFiles] = React.useState<any>([]);
  const [images = [], setImages] = React.useState<any>(
    selectedCategory?.images || []
  );

  const [value, setValue] = React.useState<any>("");

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const onFinish = async (values: ProductType) => {
    try {
      dispatch(SetLoading(true));
      let response;
      if (selectedCategory) {
        console.log(
          "selected",
          selectedCategory?.images,
          "values",
          values.images
        );
        // delete images
        const imagesToDelete = selectedCategory.images.filter(
          (image: string) => !values.images.includes(image)
        );
        await deleteImages(imagesToDelete);
        const newImagesUploaded = await uploadImages(files);
        values.images = [...values.images, ...newImagesUploaded];

        response = await axios.put(
          `/api/admin/hotels/${selectedCategory._id}`,
          values
        );
      } else {
        values.images = await uploadImages(files);

        response = await axios.post("/api/admin/hotels", values);
      }
      message.success("Hotel Added Successfully");
      setShowCategoryForm(false);
      reloadCategories();
      setSelectedCategory(null);
    } catch (error: any) {
      message.error(getCatchErrorMessage(error));
    } finally {
      dispatch(SetLoading(false));
    }
  };

  console.log("S?????", selectedCategory);

  const modelTitle = selectedCategory ? "Edit Hotel" : "Add Hotel";
  return (
    <Modal
      title={<ModelTitle title={modelTitle} />}
      open={showCategoryForm}
      onCancel={() => {
        setShowCategoryForm(false);
        setSelectedCategory(null);
      }}
      footer={null}
    >
      <Form
        layout="vertical"
        onFinish={(values) =>
          onFinish({
            ...values,
            images,
          })
        }
        initialValues={selectedCategory}
        className="flex flex-col gap-5"
      >
        <Form.Item
          label="title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input title",
            },
          ]}
        >
          {/* <input type="text" /> */}
          <Input className="    input_style  " type="text" />
        </Form.Item>

        <Form.Item
          className="input_style"
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price",
            },
          ]}
        >
          <Input className="    input_style  " type="text" />
        </Form.Item>



        <Form.Item
          className="input_style"
          label="Adults number"
          name="adults"
          rules={[
            {
              required: true,
              message: "Please input adults number",
            },
          ]}
        >
          <Input className="    input_style  " type="text" />
        </Form.Item>




        <Form.Item
          className="input_style"
          label="childrens number"
          name="childrens"
          rules={[
            {
              required: true,
              message: "Please input childrens number",
            },
          ]}
        >
          <Input className="    input_style  " type="text" />
        </Form.Item>







        <Form.Item
          className="input_style"
          label="Stars"
          name="stars"
          rules={[
            {
              required: true,
              message: "Please input price",
            },
          ]}
        >
          <Input className="    input_style  " type="text" />
        </Form.Item>

        


        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: "Please input location",
            },
          ]}
        >
          <select className="input_style w-full py-2" value={""}>
            <option value="">Select Category</option>
            {locations.map((location: any, index: any) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </Form.Item>


        <Form.Item
          label="RoomType"
          name="roomtype"
          rules={[
            {
              required: true,
              message: "Please input location",
            },
          ]}
        >
          <select className="input_style w-full py-2" value={""}>
            <option value="">Select Room type</option>
            {roomTypes.map((location: any, index: any) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </Form.Item>




        {/* <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input hotel title",
            },
          ]}
        >
         

          <div className="form-inner mb-2  !outline-green-500  ">
            <input type="text" placeholder="hotel name" />
          </div>
        </Form.Item> */}

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          {/* <textarea rows={5}></textarea> */}

          <ReactQuill
            modules={modules}
            theme="snow"
            className=" pb-[10px] border-[2.5px] text-black font-medium rounded-md border-teal-400 hover:border-blue-600"
          />
        </Form.Item>

        {/* ------Checkbox---- */}

 
<div className=" grid grid-cols-3">

<Form.Item
          className=" "
          name="isActive"
          valuePropName="checked"
        
        >
          <Checkbox>Publish </Checkbox>
        </Form.Item>


        <Form.Item
          className=" "
          name="gym"
          valuePropName="checked"
        
        >
          <Checkbox> gym </Checkbox>
        </Form.Item>



        <Form.Item
          className=" "
          name="resturant"
          valuePropName="checked"
        
        >
          <Checkbox> resturant </Checkbox>
        </Form.Item>

        

        <Form.Item
          className=" "
          name="locker"
          valuePropName="checked"
        
        >
          <Checkbox> locker </Checkbox>
        </Form.Item>

        


        <Form.Item
          className=" "
          name="wifi"
          valuePropName="checked"
        
        >
          <Checkbox> wifi </Checkbox>
        </Form.Item>



        {/* <Form.Item
          className=" "
          name="airCondition"
          valuePropName="airCondition"
        
        >
          <Checkbox>airCondition </Checkbox>
        </Form.Item>
 */}


        <Form.Item
          className=" "
          name="safe"
          valuePropName="checked"
        
        >
          <Checkbox>safety</Checkbox>
        </Form.Item>




      



        
        <Form.Item
          className=" "
          name="laundary"
          valuePropName="checked"
        
        >
          <Checkbox> laundary </Checkbox>
        </Form.Item>


        <Form.Item
          className=" "
          name="heater"
          valuePropName="checked"
        
        >
          <Checkbox> heater </Checkbox>
        </Form.Item>





        <Form.Item
          className=" "
          name="tv"
          valuePropName="checked"
        
        >
          <Checkbox> tv </Checkbox>
        </Form.Item>





        <Form.Item
          className=" "
          name="towels"
          valuePropName="checked"
        
        >
          <Checkbox> towels </Checkbox>
        </Form.Item>



        <Form.Item
          className=" "
          name="phone"
          valuePropName="checked"
        
        >
          <Checkbox> phone </Checkbox>
        </Form.Item>




        <Form.Item
          className=" "
          name="park"
          valuePropName="checked"
        
        >
          <Checkbox> park </Checkbox>
        </Form.Item>




        <Form.Item
          className=" "
          name="sauna"
          valuePropName="checked"
        
        >
          <Checkbox> sauna </Checkbox>
        </Form.Item>




        <Form.Item
          className=" "
          name="breakfast"
          valuePropName="checked"
        
        >
          <Checkbox>breakfast </Checkbox>
        </Form.Item>



        <Form.Item
          className=" "
          name="pets"
          valuePropName="checked"
        
        >
          <Checkbox> pets </Checkbox>
        </Form.Item>




        {/* airportTransfer */}

        <Form.Item
          className=" "
          name="airportTransfer"
          valuePropName="checked"
        
        >
          <Checkbox> airportTransfer </Checkbox>
        </Form.Item>




</div> 
 


      


        <div className="col-span-3">
          <Upload
            accept="image/*"
            multiple
            beforeUpload={(file) => {
              setFiles((prev: any) => [...prev, file]);
              return false;
            }}
            listType="picture-card"
          >
            Upload Images
          </Upload>
        </div>

        <div className="flex gap-5">
          {images?.map((image: any, index: number) => (
            <div
              key={index}
              className="p-5 border-solid border border-gray-300 rounded-md overflow-hidden flex flex-col items-center justify-center gap-2"
            >
              <Image
                className="w-20 h-20 object-cover"
                src={image}
                alt={image}
                width={80}
                height={80}
              />

              <span
                className="underline cursor-pointer text-gray-600"
                onClick={() => {
                  setImages((prev: any) => {
                    const temp = [...prev];
                    temp.splice(index, 1);
                    return temp;
                  });
                }}
              >
                Remove
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-5">
          <Button onClick={() => setShowCategoryForm(false)}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default HotelForm;

export interface HotelFormProps {
  showCategoryForm: boolean;
  setShowCategoryForm: any;
  selectedCategory: any;
  setSelectedCategory: any;
  reloadCategories: any;
}
