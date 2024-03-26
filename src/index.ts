export const Feedefy = {
  props: {
    projectId: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      required: false
    }
  },

  data() {
    return { script: undefined };
  },

  mounted() {
    const existingScript = document.querySelector(`script[src*="https://app.feedefy.com"]`);

    if (existingScript) {
      return;
    }

    let id = "";
    let lang = "";

    if (this.$props) {
      // For Vue 2
      id = this.$props.projectId;
      lang = this.$props.lang;
    } else if (this.props) {
      // For Vue 3
      id = this.props.projectId;
      lang = this.props.lang;
    }

    if (!id) {
      console.error("No projectId was passed to Feedefy Vue, widget will not be initialized");
      return;
    }

    this.script = document.createElement("script");

    if (lang) {
      this.script.setAttribute("lang", lang);
    }

    this.script.setAttribute("src", `https://app.feedefy.com/embed.js?id=${id}`);
    this.script.defer = true;
    this.script.addEventListener("error", () => this.script.remove());

    document.body.appendChild(this.script);
  },

  beforeUnmount() {
    this.script.remove();
  },

  render() {
    return null;
  }
};
