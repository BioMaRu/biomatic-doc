import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/containers/home/Home'
import Document from '@/containers/document/Document'

// Document
import {
  Introduction,
  Installation,
  GettingStart,

  ComponentAccordion,
  ComponentBreadcrumb,
  ComponentButton,
  ComponentCard,
  ComponentForm,
  ComponentMessage,
  ComponentProgress,
  ComponentTooltip,

  LayoutContainer,
  LayoutResponsiveGrid,

  AtomicAlignment,
  AtomicBackground,
  AtomicBorder,
  AtomicBoxPosition,
  AtomicBoxSize,
  AtomicColor,
  AtomicCursor,
  AtomicDisplay,
  AtomicFloat,
  AtomicMargin,
  AtomicObjectFit,
  AtomicOpacity,
  AtomicOverflow,
  AtomicPadding,
  AtomicTypography,
  AtomicZIndex,

  UtilityAnimation,
  UtilityRise
} from '@/components/document-pages'

Vue.use(Router)

export default new Router({
  mode: 'history',

  // Reset scroll position to top when route change
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/document',
      name: 'Document',
      component: Document,
      children: [
        {
          path: 'introduction',
          name: 'Introduction',
          component: Introduction
        },
        {
          path: 'installation',
          name: 'Installation',
          component: Installation
        },
        {
          path: 'getting-start',
          name: 'GettingStart',
          component: GettingStart
        },

        // Component
        {
          path: 'component/accordion',
          name: 'ComponentAccordion',
          component: ComponentAccordion
        },
        {
          path: 'component/breadcrumb',
          name: 'ComponentBreadcrumb',
          component: ComponentBreadcrumb
        },
        {
          path: 'component/button',
          name: 'ComponentButton',
          component: ComponentButton
        },
        {
          path: 'component/card',
          name: 'ComponentCard',
          component: ComponentCard
        },
        {
          path: 'component/input',
          name: 'ComponentForm',
          component: ComponentForm
        },
        {
          path: 'component/message',
          name: 'ComponentMessage',
          component: ComponentMessage
        },
        {
          path: 'component/progress',
          name: 'ComponentProgress',
          component: ComponentProgress
        },
        {
          path: 'component/tooltip',
          name: 'ComponentTooltip',
          component: ComponentTooltip
        },

        // Layout
        {
          path: 'layout/container',
          name: 'LayoutContainer',
          component: LayoutContainer
        },
        {
          path: 'layout/responsive-grid',
          name: 'LayoutResponsiveGrid',
          component: LayoutResponsiveGrid
        },

        // Atomic
        {
          path: 'atomic/alignment',
          name: 'AtomicAlignment',
          component: AtomicAlignment
        },
        {
          path: 'atomic/background',
          name: 'AtomicBackground',
          component: AtomicBackground
        },
        {
          path: 'atomic/border',
          name: 'AtomicBorder',
          component: AtomicBorder
        },
        {
          path: 'atomic/box-position',
          name: 'AtomicBoxPosition',
          component: AtomicBoxPosition
        },
        {
          path: 'atomic/box-size',
          name: 'AtomicBoxSize',
          component: AtomicBoxSize
        },
        {
          path: 'atomic/color',
          name: 'AtomicColor',
          component: AtomicColor
        },
        {
          path: 'atomic/cursor',
          name: 'AtomicCursor',
          component: AtomicCursor
        },
        {
          path: 'atomic/display',
          name: 'AtomicDisplay',
          component: AtomicDisplay
        },
        {
          path: 'atomic/float',
          name: 'AtomicFloat',
          component: AtomicFloat
        },
        {
          path: 'atomic/margin',
          name: 'AtomicMargin',
          component: AtomicMargin
        },
        {
          path: 'atomic/object-fit',
          name: 'AtomicObjectFit',
          component: AtomicObjectFit
        },
        {
          path: 'atomic/opacity',
          name: 'AtomicOpacity',
          component: AtomicOpacity
        },
        {
          path: 'atomic/overflow',
          name: 'AtomicOverflow',
          component: AtomicOverflow
        },
        {
          path: 'atomic/padding',
          name: 'AtomicPadding',
          component: AtomicPadding
        },
        {
          path: 'atomic/typography',
          name: 'AtomicTypography',
          component: AtomicTypography
        },
        {
          path: 'atomic/z-index',
          name: 'AtomicZIndex',
          component: AtomicZIndex
        },

        // Utility
        {
          path: 'utility/animation',
          name: 'UtilityAnimation',
          component: UtilityAnimation
        },
        {
          path: 'utility/rise',
          name: 'UtilityRise',
          component: UtilityRise
        }
      ]
    }
  ]
})
