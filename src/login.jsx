import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import Grid from "@mui/system/Unstable_Grid";
import {OutlinedInput,InputAdornment,IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';  
import Button from "@mui/material/Button";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginImage from "../src/assets/loginimage.png"
import usernameImg from "../src/assets/loginUsernameImg.svg";
import passwordImg from "../src/assets/loginPasswordImage.svg";


import "./index.css"



const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm({
    mode: "onBlur",
    // resolver: zodResolver(signInSchema)
  });
  const navigate = useNavigate();


  const [showPassword, setShowPassword] = useState(false); 
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  useEffect(()=>{
   document.body.style.backgroundColor = "#2f6962"
  },[])

  const onsubmit = async (values) => {
    console.log(values);

    try {
      const { data } = await axios.post("http://64.227.121.87/login",values);
      if (data) {
        localStorage.setItem("access", data.access);
        navigate("/dashboard");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2f6962",
        height: "100vh",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
     <Container
          component="main"
          sx={{ width: "100%", height: "100%", alignItems: "center" }}
        >
          <Grid
            container
            sx={{
              width: "100%",
              height: "495px",
              boxShadow: "0px 0px 100px 0px rgba(0, 0, 0, 0.10)",
              borderRadius: "30px",
              margin: "0 auto",
            }}
          >
            <Grid
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "55px 0 55px 0",
              }}
            >
              <img
                src={loginImage}
                alt="Login"
                style={{ width: "400px", height: "400px" }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
            <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "495px",
                  borderRadius: "30px",
                  background: "#FFF",
                  // boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.10)",
                  padding: "50px 20px 20px 20px",
                }}
                className={"box-signin"}
              >
                <Box>
                  
                </Box>
                <Box   sx={{ marginTop: "30px",color: "#c89c40",
                fontFamily: "Inter,sans-serif",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal" }}> 
                Xalq Bank
                </Box>
               
          <Box  sx={{ marginTop: "32px" }}>
          <form
                    className="form-group resume-box"
                    onSubmit={handleSubmit(onsubmit)}
                    id="login"
                  >
              
              <div style={{ position: "relative" }}>
                      <input
                        {...register("username", {
                          required:"Username is required",
                          minLength: {
                            value: 4,
                            message: "Username must be at least 4 characters",
                          },
                        })}
                        className="login-form"
                        type="text"
                        placeholder="Username"
                        style={{
                          width: "100%",
                          padding: "16px 35px",
                          marginBottom: "10px",
                          borderRadius: "12px",
                          border: "1px solid #B5B5B5",
                          backgroundImage: `url('${usernameImg}')`,
                          backgroundRepeat: "no-repeat",
                          fontSize: "18px",
                          backgroundSize: "23px 23px",
                          backgroundPosition: "8px",
                          alignItems: "center",
                        }}
                      />
                    </div>
                    {errors.username && (
                    <p style={{color:"red",marginBottom:"20px"}}>{`${errors.username.message}`}</p>
                    )}
             
             <div style={{ position: "relative" }}>
                      <OutlinedInput
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                          },
                        })}
                        className="login-form passwordlogin"
                        // type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        sx={{
                          marginTop: "20px",
                          marginBottom: "17px",
                          width: "100%",
                          padding: "0px 35px",
                          borderRadius: "12px",
                          border: "none",
                          borderBottom:0,
                          backgroundImage: `url('${passwordImg}')`,
                          backgroundRepeat: "no-repeat",
                          fontSize: "18px",
                          backgroundSize: "23px 23px",
                          backgroundPosition: "8px",
                          alignItems: "center",
                          '&::before': { 
                            content: '""',
                            borderBottom:"none",
                            borderBottomLeftRadius:"12px"
                           },
                           ':hover': {
                            borderColor:"#FFF",
                            outline:"none" // theme.palette.primary.main
                          },
                          
                          
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </div>
               {errors.password && (
                <p style={{color:"red",marginBottom:"20px"}}>{`${errors.password.message}`}</p>
              )}
            </form>
            
            <Button
              type="submit"
              fullWidth
              disabled={isSubmitting}
              variant="contained"
              form="login"
              onClick={handleSubmit(onsubmit)}
              sx={{
                marginTop: "36px",
                mb: 2,
                height: "50px",
                background: "#40948a",
                boxShadow:"none",
                color:"#FFF",
                fontWeight:"600",
                fontSize:"15px",
                
                fontStyle: "normal",
                lineHeight: "normal",
                fontFamily:"Inter, sans-serif",
                "&:hover": {
                  background: "#40948a  ",
                  boxShadow:"none",
                    
                }
              }}  
            >
              Login
            </Button>
          </Box>
        </Box>
        </Grid>
        </Grid>
      </Container>
      </Grid>
    </Box>
  );
};

export default Login;
