import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { ChartBar as ChartBarIcon } from "../../icons/chart-bar";
import { UserAdd as UserAddIcon } from "../../icons/user-add";
import { NavItem } from "../nav-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { plannerIdCall } from "src/utils/apihelper";
import { faAtom } from "@fortawesome/free-solid-svg-icons";


const items = [
  // {
  //   href: '/',
  //   icon: (<ChartBarIcon fontSize="small" />),
  //   title: 'Dashboard'
  // },
  // { 
  //   href: '/materials',
  //   icon: (<FontAwesomeIcon  icon={faBook} />),
  //   title: 'Materials'
  // },
  {
    href: "/",
    icon: <FontAwesomeIcon icon={faBriefcaseMedical} />,
    title: "Health Score",
  },
  {
    href: "/exception",
    icon: <FontAwesomeIcon icon={faPeopleRoof} />,
    title: "Exception",
  },
  {
    href: "/ranking",
    icon: <FontAwesomeIcon icon={faRankingStar} />,
    title: "Part Ranking",
  },
  {
    href: "",
    icon: <FontAwesomeIcon icon={faAtom} />,
    title: "Recommendation Engine",
  },
  // {
  //   href: '/account',
  //   icon: (<FontAwesomeIcon icon={faUser} />),
  //   title: 'Account'
  // },
  {
    href: "/login",
    icon: <UserAddIcon fontSize="small" />,
    title: "Log out",
  },
  // {
  //   href: '/404',
  //   icon:  (<XCircleIcon fontSize="small" />),
  //   title: 'Error'
  // }
];

export const DashboardSidebar = (props) => {
  const [username, setUsername] = useState("");

  const [preSetName, setPreSetName] = useState("");

  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });


  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  useEffect(async () => {
    // const plannerIdResponse = await plannerIdCall();
    // console.log("plannerIdResponse", plannerIdResponse);
   // setUsername(plannerIdResponse.name);


   let name = localStorage.getItem("plannerId");

    if (name == "114"){
      setUsername("Ben Shockley");
    }
    else if (name == "594"){
      setUsername("Alec Terry");
    }
    else if (name == "177"){
      setUsername("Justin Hayes");
    }
    else if (name == "M11"){
      setUsername("Liliana Banda");
    }


  }, []);

        // 114 - Ben Shockley
        // 594 - Alec Terry

        // 177 - Justin Hayes
        // M11 - Liliana Banda




  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/"
passHref>
              <a>
                {/* <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                /> */}
                <img height={62}
width={62}
src="bmw_logo_PNG19714.png?v=2"
alt="" />
              </a>
            </NextLink>
            {/* <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  BMW
                </Typography> */}
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "11px",
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit"
variant="subtitle1">

                    {/* USER NAME */}

                  {username.split(" ").join(".")}








                  <br />
                  {Date(Date.now()).slice(4, 15)}
                </Typography>
                {/* <Typography
                  color="neutral.400"
                  variant="body2"
                >
                 Username
                </Typography> */}
              </div>
              {/* <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              /> */}
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              onClick={() => {
                item.title == "Log out" ? localStorage.clear() : null;
              }}
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
        {/* <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
          <Typography
            color="neutral.100"
            variant="subtitle2"
          >
            Need more features?
          </Typography>
          <Typography
            color="neutral.500"
            variant="body2"
          >
            Check out our Pro solution template.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mt: 2,
              mx: 'auto',
              width: '160px',
              '& img': {
                width: '100%'
              }
            }}
          >
            <img
              alt="Go to pro"
              src="/static/images/sidebar_pro.png"
            />
          </Box>
          <NextLink
            href="https://material-kit-pro-react.devias.io/"
            passHref
          >
            <Button
              color="secondary"
              component="a"
              endIcon={(<OpenInNewIcon />)}
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              Pro Live Preview
            </Button>
          </NextLink>
        </Box> */}
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            color: "#FFFFFF",
            width: 280,
            backdropFilter: 'blur(30px)',
            backgroundColor: 'rgba(0,0,0,0.625)'
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          color: "#FFFFFF",
          width: 280,
          backdropFilter: 'blur(30px)',
          backgroundColor: 'rgba(0,0,0,0.625)'
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
