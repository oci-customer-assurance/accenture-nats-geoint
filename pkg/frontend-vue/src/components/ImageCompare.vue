<template>
  <figure
    class="image-compare"
    :class="{ full }"
    @mousemove.prevent="onMouseMove"
    @touchstart="onMouseMove($event, true)"
    @touchmove="onMouseMove($event, true)"
    @click="onMouseMove($event, true)"
  >
    <div
      class="image-compare-wrapper"
      :style="{ width: posX + 'px' }"
      v-show="!hideAfter"
    >
      <img :src="after" :alt="after" :style="dimensions" />
    </div>
    <img :src="before" :alt="before" :style="dimensions" />
    <div
      class="image-compare-handle"
      :style="{ left: posX + 'px' }"
      @mousedown.prevent="onMouseDown"
      v-show="!hideAfter"
    >
      <span class="image-compare-handle-icon left">
        <slot name="icon-left"></slot>
      </span>
      <span class="image-compare-handle-icon right">
        <slot name="icon-right"></slot>
      </span>
    </div>
  </figure>
</template>

<script>
  export default {
    props: {
      before: {
        type: String,
        required: true,
      },
      after: {
        type: String,
        required: true,
      },
      full: {
        type: Boolean,
        default: false,
      },
      padding: {
        type: Object,
        default() {
          return {
            left: 0,
            right: 0,
          }
        },
        required: false,
      },
      hideAfter: {
        type: Boolean,
        default: false,
        required: false,
      },
    },
    data() {
      return {
        width: null,
        height: null,
        pageX: null,
        posX: null,
        isDragging: false,
        allowNextFrame: true,
        unwatch: null,
      }
    },
    computed: {
      dimensions() {
        return {
          width: `${this.width}px`,
          height: this.full ? `${this.height}px` : 'auto',
        }
      },
    },
    methods: {
      onResize() {
        this.width = this.$el.clientWidth
        this.height = this.$el.clientHeight
        this.setInitialPosX(this.padding.left + this.padding.right)
      },
      onMouseDown() {
        this.isDragging = true
      },
      onMouseUp(event) {
        event.preventDefault()
        this.isDragging = false
      },
      onMouseMove(event, isDragging = this.isDragging) {
        if (isDragging && this.allowNextFrame) {
          this.allowNextFrame = false
          this.pageX =
            event.pageX ||
            event.targetTouches[0].pageX ||
            event.originalEvent.targetTouches[0].pageX
          window.requestAnimationFrame(this.updatePos)
        }
      },
      updatePos() {
        let posX = this.pageX - this.$el.getBoundingClientRect().left
        if (posX < this.padding.left) {
          posX = this.padding.left
        } else if (posX > this.width - this.padding.right) {
          posX = this.width - this.padding.right
        }
        this.posX = posX
        this.allowNextFrame = true
      },
      setInitialPosX(padding) {
        if (padding >= this.width) {
          console.error('Sum of paddings is wider then parent element!')
          return
        }
        this.posX = (this.width + this.padding.left - this.padding.right) / 2
      },
    },
    created() {
      window.addEventListener('mouseup', this.onMouseUp)
      window.addEventListener('resize', this.onResize)
    },
    mounted() {
      this.onResize()
      this.unwatch = this.$watch(
        () => this.padding.left + this.padding.right,
        newValue => this.setInitialPosX(newValue),
      )
    },
    beforeDestroy() {
      this.unwatch()
      window.removeEventListener('mouseup', this.onMouseUp)
      window.removeEventListener('resize', this.onResize)
    },
  }
</script>

<style lang="postcss" scoped>
  .image-compare {
    position: relative;
    margin: 0;
    &.full {
      overflow: hidden;
      height: 100%;
      width: 100%;
      flex: 1;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    img {
      max-width: none;
      display: block;
    }
  }
  .image-compare-wrapper,
  .image-compare-handle {
    bottom: 0;
    position: absolute;
    top: 0;
  }
  .image-compare-wrapper {
    left: 0;
    overflow: hidden;
    width: 100%;
    z-index: 1;
    transform: translateZ(0);
    will-change: width;
  }
  .image-compare-handle {
    color: #fff;
    background-color: currentColor;
    cursor: ew-resize;
    transform: translateX(-50%) translateZ(0);
    width: 2px;
    z-index: 2;
    will-change: left;
  }
  .image-compare-handle-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 2rem;
    color: currentColor;
    line-height: normal;
    &.left {
      padding-right: 10px;
      transform: translate(-100%, -50%);
    }
    &.right {
      padding-left: 10px;
      transform: translate(0, -50%);
    }
  }
</style>
