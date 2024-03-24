import { c as create_ssr_component, f as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/Button.js";
import { T as Tooltip } from "../../../../chunks/Tooltip.js";
import { T as TextField } from "../../../../chunks/TextField.js";
import { S as Switch } from "../../../../chunks/Switch.js";
const cropwatchWithText = "/_app/immutable/assets/cropwatchText.DtMOKhKF.png";
const css = {
  code: "#login-background.svelte-f04bme{min-height:100vh;margin:0;background-attachment:fixed;background-image:url($lib/images/saito.jpg);background-repeat:no-repeat;background-size:cover;background-position:center center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let email = "";
  let password = "";
  let loggingIn = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div id="login-background" class="svelte-f04bme"><div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"><div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"><div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 mx-2 md:mx-0"><div class="sm:mx-auto sm:w-full sm:max-w-md" data-svelte-h="svelte-13xficy"><img class="mx-auto h-10 w-auto"${add_attribute("src", cropwatchWithText, 0)} alt="CropWatch"> <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2></div> <p class="text-center text-sm text-gray-400" data-svelte-h="svelte-1c8wvdf">The login page prioritizes user security, offering a seamless experiance that ensures
					quick and convienient access to the system&#39;s array of benifits.</p> <form class="" action="?login" method="POST"><div class="mb-3"><label for="email" class="block text-sm font-medium leading-6 text-gray-900" data-svelte-h="svelte-8ppih0">Email address</label> <div class="mt-2">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: "email",
        id: "email",
        name: "email",
        type: "email",
        autocomplete: "email",
        required: true,
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="mb-2"><label for="password" class="block text-sm font-medium leading-6 text-gray-900" data-svelte-h="svelte-49gofc">Password</label> <div class="mt-2">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        id: "password",
        label: "Enter Password",
        placeholder: "****************",
        name: "password",
        type: "password",
        autocomplete: "current-password",
        required: true,
        value: password
      },
      {
        value: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="flex items-center justify-between"><div class="flex items-center">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        title: "This feature is disabled, but will be activated soon!"
      },
      {},
      {
        default: () => {
          return `${validate_component(Switch, "Switch").$$render(
            $$result,
            {
              name: "rememberMe",
              disabled: true,
              classes: {
                switch: "bg-white border-gray-400 data-[checked=true]:bg-blue-600",
                toggle: "data-[checked=false]:bg-blue-600 data-[checked=true]:bg-white"
              }
            },
            {},
            {}
          )} <label for="remember" class="text-sm text-gray-900" data-svelte-h="svelte-djoeys">  Remember me</label>`;
        }
      }
    )}</div> <div class="text-sm leading-6" data-svelte-h="svelte-19e8x1k"><a href="forgot-password" class="font-semibold text-sm text-blue-400 hover:text-indigo-500">Forgot password?</a></div></div> <div class="mt-5">${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: loggingIn,
        loading: loggingIn,
        type: "button",
        class: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      },
      {},
      {
        default: () => {
          return `Login`;
        }
      }
    )}</div></form> <div data-svelte-h="svelte-1x39fpj"><div class="relative mt-6 flex flex-row"><div class="mx-auto flex flex-row"><p>Don&#39;t have an account?</p> <a class="blue-100" href="register">  <u class="text-blue-400 hover:text-indigo-500">Register Now</u></a></div></div></div></div></div></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
