export const Feedefy = {
  props: {
    projectId: {
      type: String,
      required: true
    }
  },

  data() {
    return { script: undefined };
  },

  mounted() {
    let id = "";

    if (this.$props) {
      // For Vue 2
      id = this.$props.projectId;
    } else if (this.props) {
      // For Vue 3
      id = this.props.projectId;
    }

    if (!id) {
      console.error("No projectId was passed to Feedefy Vue, widget will not be initialized");
      return;
    }

    this.script = document.createElement("script");

    this.script.setAttribute("src", `https://app.feedefy.com/widget.js?id=${id}`);

    this.script.defer = true;

    this.script.addEventListener("error", () => this.script.remove());

    document.head.appendChild(this.script);
  },

  beforeUnmount() {
    this.script.remove();
  },

  render() {
    return null;
  }
};
