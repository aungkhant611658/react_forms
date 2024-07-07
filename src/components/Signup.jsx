import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // console.log(errors);

  const phoneValidate = (error) => {
    if (!error) return "";
    switch (error.type) {
      case "required":
        return "Phone is required";
      case "minLength":
        return "Min length exceeded";
      case "maxLength":
        return "Max length exceeded";
      default:
        return "";
    }
  };

  return (
    <Card sx={{ padding: 3 }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        textAlign={"center"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <TextField
            {...register("first_name", {
              required: true,
              maxLength: 80,
            })}
            error={!!errors.first_name}
            helperText={
              errors.first_name
                ? errors.first_name.type === "required"
                  ? "First Name is required"
                  : "Max length exceeded"
                : ""
            }
            id="first_name"
            label="First Name"
            size="small"
            sx={{ m: 1, width: "30ch" }}
          />

          <TextField
            {...register("middle_name", {
              required: true,
              maxLength: 80,
            })}
            error={!!errors.middle_name}
            helperText={
              errors.middle_name
                ? errors.middle_name.type === "required"
                  ? "Middle Name is required"
                  : "Max length exceeded"
                : ""
            }
            id="middle_name"
            label="Middle Name"
            size="small"
            sx={{ m: 1, width: "30ch" }}
          />

          <TextField
            {...register("last_name", {
              required: true,
              maxLength: 80,
            })}
            error={!!errors.last_name}
            helperText={
              errors.last_name
                ? errors.last_name.type === "required"
                  ? "Last Name is required"
                  : "Max length exceeded"
                : ""
            }
            id="last_name"
            label="Last Name"
            size="small"
            sx={{ m: 1, width: "30ch" }}
          />
        </div>

        <div>
          <TextField
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            error={!!errors.email}
            helperText={
              errors.email
                ? errors.email.type === "required"
                  ? "Email is required"
                  : "A valid email account is required."
                : ""
            }
            id="email"
            label="Email"
            size="small"
            sx={{ m: 1, mt: 3, width: "40ch" }}
          />

          <TextField
            {...register("phone", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
            error={!!errors.phone}
            helperText={phoneValidate(errors.phone)}
            id="phone"
            label="Phone"
            size="small"
            sx={{ m: 1, mt: 3, width: "40ch" }}
          />
        </div>

        <div>
          <Button type="submit">Submit</Button>
        </div>
      </Box>
    </Card>
  );
}
